import React from 'react'
import { Card } from '@servicenow/react-components/Card'
import type { Oversikt } from '../services/api'

// K7 – definisjonene ligger i SPEC seksjon 5 og beregnes på serveren
export default function Nokkeltall({ tall }: { tall: Oversikt['nokkeltall'] }) {
    const kort = [
        { tekst: 'Aktive kontrakter', verdi: tall.aktiveKontrakter, farge: 'info' as const },
        { tekst: 'Allokerte plasser', verdi: tall.allokertePlasser, farge: 'positive' as const },
        { tekst: 'Slutter innen 30 dager', verdi: tall.slutterInnen30, farge: 'warning' as const },
    ]
    return (
        <section className="ra-nokkeltall" aria-label="Nøkkeltall">
            {kort.map((k) => (
                <Card key={k.tekst} size="sm" sidebar={{ color: k.farge, variant: 'primary' }}>
                    <div className="ra-nokkeltall__kort">
                        <span className="ra-nokkeltall__verdi">{k.verdi}</span>
                        <span className="ra-nokkeltall__tekst">{k.tekst}</span>
                    </div>
                </Card>
            ))}
        </section>
    )
}
