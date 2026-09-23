import { TABELL_ALLOKERING } from '../services/api'

export type Visning = 'oversikt' | 'allokeringer'

export interface Rute {
    visning: Visning
}

export function ruteFraUrl(): Rute {
    const visning = new URLSearchParams(window.location.search).get('view')
    return { visning: visning === 'allokeringer' ? 'allokeringer' : 'oversikt' }
}

const TITLER: Record<Visning, string> = {
    oversikt: 'Ressursallokering',
    allokeringer: 'Alle allokeringer',
}

export function skrivRute(rute: Rute) {
    const sti = `${window.location.pathname}?${new URLSearchParams({ view: rute.visning })}`
    const tittel = TITLER[rute.visning]
    // Inne i Polaris-rammen oppdateres adressefeltet via toppvinduet
    if (window.self !== window.top) {
        ;(window as any).CustomEvent.fireTop('magellanNavigator.permalink.set', { relativePath: sti, title: tittel })
    }
    window.history.pushState(rute, '', sti)
    document.title = tittel
}

// Det vanlige postskjemaet. React-postskjemaet (RecordProvider) i
// @servicenow/react-components 0.1.8 krasjer når modulen lastes på denne
// instansversjonen, så vi bruker standardskjemaet i stedet. '-1' gir ny post.
export function apneVanligSkjema(sysId: string) {
    window.location.assign(`/${TABELL_ALLOKERING}.do?sys_id=${encodeURIComponent(sysId)}`)
}
