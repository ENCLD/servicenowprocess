import type { Oversikt } from '../../server/oversikt-modell'

export type { Oversikt }
export type KonsulentRad = Oversikt['konsulenter'][number]
export type AllokeringRad = Oversikt['allokeringer'][number]

export const TABELL_ALLOKERING = 'x_kpmg_ra_b1_allokering'

declare global {
    interface Window {
        g_ck: string
    }
}

export interface AllokeringFelter {
    konsulent?: string
    kunde?: string
    fra_dato: string
    til_dato: string
    prosent: number
}

async function kall<T>(url: string, init: RequestInit = {}): Promise<T> {
    const svar = await fetch(url, {
        ...init,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-UserToken': window.g_ck,
        },
    })
    const kropp = await svar.json().catch(() => ({}))
    if (!svar.ok) {
        // Table API returnerer { error: { message, detail } } når en forretningsregel avviser
        const feil = kropp?.error
        throw new Error([feil?.message, feil?.detail].filter(Boolean).join(': ') || `HTTP ${svar.status}`)
    }
    return kropp.result as T
}

export const hentOversikt = () => kall<Oversikt>('/api/x_kpmg_ra_b1/ra/oversikt')

export const opprettAllokering = (felter: AllokeringFelter) =>
    kall(`/api/now/table/${TABELL_ALLOKERING}`, { method: 'POST', body: JSON.stringify(felter) })

export const oppdaterAllokering = (sysId: string, felter: AllokeringFelter) =>
    kall(`/api/now/table/${TABELL_ALLOKERING}/${sysId}`, { method: 'PATCH', body: JSON.stringify(felter) })
