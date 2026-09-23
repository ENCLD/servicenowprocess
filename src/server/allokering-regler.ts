import { gs } from '@servicenow/glide'
import { finnOverallokeringer, validerAllokering } from './regler.ts'
import { hentAllokeringer } from './data.ts'

// K1 (before insert/update): prosent utenfor 1–100 og til-dato før fra-dato avvises.
// Kjører på serveren, så regelen gjelder skjema, Table API og UI-siden likt.
export function validerAllokeringFoerLagring(current: any) {
    const feil = validerAllokering(
        current.getValue('fra_dato') || '',
        current.getValue('til_dato') || '',
        Number(current.getValue('prosent'))
    )
    if (feil.length) {
        feil.forEach((f) => gs.addErrorMessage(f))
        current.setAbortAction(true)
    }
}

// K3 (after insert/update): tydelig advarsel i skjemaet når konsulenten blir
// overallokert i en overlappende periode. Lagringen er fortsatt gjennomført.
export function varsleOverallokering(current: any) {
    const funn = finnOverallokeringer(hentAllokeringer(current.getValue('konsulent')))
    funn.forEach((o) =>
        gs.addErrorMessage(
            `Advarsel: ${current.getDisplayValue('konsulent')} er allokert ${o.sum} % i perioden ` +
                `${o.dato} – ${o.til} (over 100 %). Allokeringen er lagret.`
        )
    )
}
