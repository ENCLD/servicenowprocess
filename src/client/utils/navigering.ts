export type Visning = 'oversikt' | 'allokeringer' | 'allokering'

export interface Rute {
    visning: Visning
    id: string | null
}

export function ruteFraUrl(): Rute {
    const params = new URLSearchParams(window.location.search)
    const visning = params.get('view')
    return {
        visning: visning === 'allokeringer' || visning === 'allokering' ? visning : 'oversikt',
        id: params.get('id'),
    }
}

const TITLER: Record<Visning, string> = {
    oversikt: 'Ressursallokering',
    allokeringer: 'Alle allokeringer',
    allokering: 'Allokering',
}

export function skrivRute(rute: Rute) {
    const params = new URLSearchParams({ view: rute.visning })
    if (rute.id) params.set('id', rute.id)
    const sti = `${window.location.pathname}?${params}`
    const tittel = TITLER[rute.visning]
    // Inne i Polaris-rammen oppdateres adressefeltet via toppvinduet
    if (window.self !== window.top) {
        ;(window as any).CustomEvent.fireTop('magellanNavigator.permalink.set', { relativePath: sti, title: tittel })
    }
    window.history.pushState(rute, '', sti)
    document.title = tittel
}
