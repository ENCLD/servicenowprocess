import { GlideRecord, GlideDateTime } from '@servicenow/glide'
import type { AllokeringInn, KonsulentInn, KundeInn } from './oversikt-modell'

// Dagens dato i brukerens tidssone, som 'YYYY-MM-DD'
export function iDag(): string {
    return new GlideDateTime().getLocalDate().getByFormat('yyyy-MM-dd')
}

export function hentKonsulenter(): KonsulentInn[] {
    const liste: KonsulentInn[] = []
    const gr = new GlideRecord('x_kpmg_ra_b1_konsulent')
    gr.query()
    while (gr.next()) {
        liste.push({
            sys_id: gr.getUniqueValue(),
            navn: gr.getValue('navn') || '',
            tittel: gr.getValue('tittel') || '',
            aktiv: gr.getValue('aktiv') === '1' || gr.getValue('aktiv') === 'true',
        })
    }
    return liste
}

export function hentKunder(): KundeInn[] {
    const liste: KundeInn[] = []
    const gr = new GlideRecord('x_kpmg_ra_b1_kunde')
    gr.orderBy('bedriftsnavn')
    gr.query()
    while (gr.next()) {
        liste.push({ sys_id: gr.getUniqueValue(), bedriftsnavn: gr.getValue('bedriftsnavn') || '' })
    }
    return liste
}

export function hentAllokeringer(konsulent?: string): AllokeringInn[] {
    const liste: AllokeringInn[] = []
    const gr = new GlideRecord('x_kpmg_ra_b1_allokering')
    if (konsulent) gr.addQuery('konsulent', konsulent)
    gr.orderBy('fra_dato')
    gr.query()
    while (gr.next()) {
        liste.push({
            sys_id: gr.getUniqueValue(),
            konsulent: gr.getValue('konsulent') || '',
            kunde: gr.getValue('kunde') || '',
            fra: gr.getValue('fra_dato') || '',
            til: gr.getValue('til_dato') || '',
            prosent: parseInt(gr.getValue('prosent') || '0', 10),
        })
    }
    return liste
}
