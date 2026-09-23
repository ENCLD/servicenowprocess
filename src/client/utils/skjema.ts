import { validerAllokering } from '../../server/regler'

export interface Utkast {
    fra: string
    til: string
    prosent: string
}

const DATO = /^\d{4}-\d{2}-\d{2}$/

// Samme regler som forretningsregelen på serveren (K1), sjekket før vi sender,
// slik at brukeren får en tydelig melding uten et mislykket kall.
export function valider(utkast: Utkast): string[] {
    const feil: string[] = []
    if (!DATO.test(utkast.fra)) feil.push('Fra-dato må fylles ut (ÅÅÅÅ-MM-DD).')
    if (!DATO.test(utkast.til)) feil.push('Til-dato må fylles ut (ÅÅÅÅ-MM-DD).')
    return feil.concat(validerAllokering(utkast.fra, utkast.til, Number(utkast.prosent)))
}
