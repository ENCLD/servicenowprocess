import React from 'react'
import { Alert } from '@servicenow/react-components/Alert'
import type { KonsulentRad } from '../services/api'

// K3 – tydelig advarsel øverst på siden. Lagring er fortsatt tillatt.
export default function OverallokeringVarsel({ konsulenter }: { konsulenter: KonsulentRad[] }) {
    const perioder = konsulenter.flatMap((k) =>
        k.overallokeringer.map((o) => `${k.navn}: ${o.sum} % fra ${o.dato} til ${o.til}`)
    )
    if (perioder.length === 0) return null
    return (
        <Alert
            status="critical"
            icon="triangle-exclamation-outline"
            header="Overallokering"
            content={`Over 100 % i overlappende perioder – ${perioder.join('; ')}.`}
        />
    )
}
