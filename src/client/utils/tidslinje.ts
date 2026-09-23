import { leggTilDager } from '../../server/regler'
import type { AllokeringRad } from '../services/api'

export interface Vindu {
    fra: string
    til: string
    dager: number
}

const dagnr = (dato: string) => Date.parse(`${dato}T00:00:00Z`) / 86400000

// Fra starten av måneden to måneder før i dag til slutten av måneden ni måneder frem
export function lagVindu(iDag: string): Vindu {
    const [aar, mnd] = iDag.split('-').map(Number)
    const fra = new Date(Date.UTC(aar, mnd - 3, 1)).toISOString().substring(0, 10)
    const til = new Date(Date.UTC(aar, mnd + 9, 0)).toISOString().substring(0, 10)
    return { fra, til, dager: dagnr(til) - dagnr(fra) + 1 }
}

// Posisjon i prosent av bredden; til-dato teller som hel dag
export const venstre = (v: Vindu, dato: string) => ((dagnr(dato) - dagnr(v.fra)) / v.dager) * 100
export const bredde = (v: Vindu, fra: string, til: string) => ((dagnr(til) - dagnr(fra) + 1) / v.dager) * 100

export function synlig(v: Vindu, a: { fra: string; til: string }) {
    return a.fra <= v.til && a.til >= v.fra
}

export function klipp(v: Vindu, a: { fra: string; til: string }) {
    return { fra: a.fra < v.fra ? v.fra : a.fra, til: a.til > v.til ? v.til : a.til }
}

// Legger overlappende allokeringer i hvert sitt spor, slik at alle perioder synes
export function fordelSpor(allokeringer: AllokeringRad[]): Map<string, number> {
    const sporSlutt: string[] = []
    const spor = new Map<string, number>()
    for (const a of [...allokeringer].sort((x, y) => (x.fra < y.fra ? -1 : 1))) {
        let i = sporSlutt.findIndex((slutt) => slutt < a.fra)
        if (i === -1) i = sporSlutt.push('') - 1
        sporSlutt[i] = a.til
        spor.set(a.sys_id, i)
    }
    return spor
}

export function maaneder(v: Vindu): { dato: string; navn: string }[] {
    const liste: { dato: string; navn: string }[] = []
    let dato = v.fra
    while (dato <= v.til) {
        const d = new Date(`${dato}T00:00:00Z`)
        liste.push({ dato, navn: d.toLocaleDateString('nb-NO', { month: 'short', year: '2-digit', timeZone: 'UTC' }) })
        dato = leggTilDager(new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).toISOString().substring(0, 10), 1)
    }
    return liste
}
