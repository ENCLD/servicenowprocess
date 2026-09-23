import type { Allokering, Overallokering } from './regler.ts'
import {
    GRENSE,
    erAktiv,
    slutterInnen30,
    sumPaaDag,
    finnOverallokeringer,
    lavesteSumNeste30,
} from './regler.ts'

export interface KonsulentInn {
    sys_id: string
    navn: string
    tittel: string
    aktiv: boolean
}

export interface KundeInn {
    sys_id: string
    bedriftsnavn: string
}

export interface AllokeringInn extends Allokering {
    kunde: string
}

// Én samlet modell for UI-siden, slik at K2, K3, K4, K7, K8 og K9 alltid bygger på
// de samme definisjonene og det samme datagrunnlaget.
export function byggOversikt(
    konsulenter: KonsulentInn[],
    kunder: KundeInn[],
    allokeringer: AllokeringInn[],
    iDag: string
) {
    const kundenavn = new Map(kunder.map((k) => [k.sys_id, k.bedriftsnavn]))
    const konsulentnavn = new Map(konsulenter.map((k) => [k.sys_id, k.navn]))
    const perKonsulent = (id: string) => allokeringer.filter((a) => a.konsulent === id)

    const overallokertIder = new Set<string>()
    const rader = konsulenter
        .filter((k) => k.aktiv)
        .sort((a, b) => a.navn.localeCompare(b.navn))
        .map((k) => {
            const egne = perKonsulent(k.sys_id)
            const overallokeringer: Overallokering[] = finnOverallokeringer(egne)
            overallokeringer.forEach((o) => o.allokeringer.forEach((id) => overallokertIder.add(id)))
            const lavest = lavesteSumNeste30(egne, iDag)
            return {
                sys_id: k.sys_id,
                navn: k.navn,
                tittel: k.tittel,
                totalIDag: sumPaaDag(egne, iDag), // K2 / K4
                overallokeringer, // K3
                ledigKapasitet: Math.max(0, GRENSE - lavest), // K9
            }
        })

    const aktive = allokeringer.filter((a) => erAktiv(a, iDag))
    const slutterSnart = allokeringer
        .filter((a) => slutterInnen30(a, iDag))
        .sort((a, b) => (a.til < b.til ? -1 : a.til > b.til ? 1 : 0))

    return {
        iDag,
        konsulenter: rader,
        kunder: kunder.map((k) => ({ sys_id: k.sys_id, navn: k.bedriftsnavn })),
        allokeringer: allokeringer.map((a) => ({
            ...a,
            konsulentNavn: konsulentnavn.get(a.konsulent) || '',
            kundeNavn: kundenavn.get(a.kunde) || '',
            aktiv: erAktiv(a, iDag),
            overallokert: overallokertIder.has(a.sys_id),
        })),
        // K7: allokerte plasser = antall aktive kontrakter (én allokering = én plass)
        nokkeltall: {
            aktiveKontrakter: aktive.length,
            allokertePlasser: aktive.length,
            slutterInnen30: slutterSnart.length,
        },
        // K8
        slutterSnart: slutterSnart.map((a) => ({
            sys_id: a.sys_id,
            konsulentNavn: konsulentnavn.get(a.konsulent) || '',
            kundeNavn: kundenavn.get(a.kunde) || '',
            til: a.til,
        })),
        // K9
        trengerOppdrag: rader
            .filter((r) => r.ledigKapasitet > 0)
            .sort((a, b) => b.ledigKapasitet - a.ledigKapasitet)
            .map((r) => ({ sys_id: r.sys_id, navn: r.navn, ledigKapasitet: r.ledigKapasitet })),
    }
}

export type Oversikt = ReturnType<typeof byggOversikt>
