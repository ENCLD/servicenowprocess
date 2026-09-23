// Rene beregningsregler for SPEC seksjon 4 og 5. Ingen Glide-avhengigheter, slik at
// definisjonene kan testes lokalt og brukes likt av REST-API og forretningsregler.
// Alle datoer er 'YYYY-MM-DD'-strenger, som kan sammenlignes leksikografisk.

export interface Allokering {
    sys_id: string
    konsulent: string
    fra: string
    til: string
    prosent: number
}

export interface Overallokering {
    dato: string // første dag summen er over 100 %
    til: string // siste dag i den samme overlappende perioden
    sum: number
    allokeringer: string[]
}

export const GRENSE = 100
export const VINDU_DAGER = 30

export function leggTilDager(dato: string, dager: number): string {
    const d = new Date(`${dato}T00:00:00Z`)
    d.setUTCDate(d.getUTCDate() + dager)
    return d.toISOString().substring(0, 10)
}

// Aktiv kontrakt: fra-dato ≤ i dag ≤ til-dato
export function erAktiv(a: Allokering, iDag: string): boolean {
    return a.fra <= iDag && iDag <= a.til
}

// Slutter innen 30 dager: aktiv kontrakt der til-dato ≤ i dag + 30 dager
export function slutterInnen30(a: Allokering, iDag: string): boolean {
    return erAktiv(a, iDag) && a.til <= leggTilDager(iDag, VINDU_DAGER)
}

// Overlapp: A.fra ≤ B.til og B.fra ≤ A.til
export function overlapper(a: Allokering, b: Allokering): boolean {
    return a.fra <= b.til && b.fra <= a.til
}

export function sumPaaDag(allokeringer: Allokering[], dato: string): number {
    return allokeringer.filter((a) => erAktiv(a, dato)).reduce((s, a) => s + a.prosent, 0)
}

// K3: perioder der en konsulents overlappende allokeringer til sammen er over 100 %.
// Summen endres bare der en allokering starter (fra) eller dagen etter at den slutter
// (til + 1), så dagene mellom to slike punkter har samme sum.
export function finnOverallokeringer(allokeringer: Allokering[]): Overallokering[] {
    const punkter = Array.from(
        new Set(allokeringer.flatMap((a) => [a.fra, leggTilDager(a.til, 1)]))
    ).sort()
    const funn: Overallokering[] = []
    for (let i = 0; i < punkter.length - 1; i++) {
        const dato = punkter[i]
        const aktive = allokeringer.filter((a) => erAktiv(a, dato))
        const sum = aktive.reduce((s, a) => s + a.prosent, 0)
        if (sum <= GRENSE) continue
        const til = leggTilDager(punkter[i + 1], -1)
        const ider = aktive.map((a) => a.sys_id)
        const forrige = funn[funn.length - 1]
        // Sammenhengende dager over grensen er én periode
        if (forrige && leggTilDager(forrige.til, 1) === dato) {
            forrige.til = til
            forrige.sum = Math.max(forrige.sum, sum)
            forrige.allokeringer = Array.from(new Set([...forrige.allokeringer, ...ider]))
        } else {
            funn.push({ dato, til, sum, allokeringer: ider })
        }
    }
    return funn
}

// K9: laveste daglige sum de neste 30 dagene (i dag t.o.m. i dag + 30).
// Ledig kapasitet = 100 − laveste sum, så ett hull i perioden gjør konsulenten ledig.
export function lavesteSumNeste30(allokeringer: Allokering[], iDag: string): number {
    let lavest = Infinity
    for (let i = 0; i <= VINDU_DAGER; i++) {
        lavest = Math.min(lavest, sumPaaDag(allokeringer, leggTilDager(iDag, i)))
    }
    return lavest
}

export function validerAllokering(fra: string, til: string, prosent: number): string[] {
    const feil: string[] = []
    if (!Number.isInteger(prosent) || prosent < 1 || prosent > 100) {
        feil.push('Prosent må være et heltall mellom 1 og 100.')
    }
    if (fra && til && til < fra) {
        feil.push('Til-dato kan ikke være før fra-dato.')
    }
    return feil
}
