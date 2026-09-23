import React from 'react'
import Nokkeltall from '../components/Nokkeltall'
import SlutterSnart from '../components/SlutterSnart'
import Tidslinje from '../components/Tidslinje'
import Soylediagram from '../components/Soylediagram'
import Fordeling from '../components/Fordeling'
import OverallokeringVarsel from '../components/OverallokeringVarsel'
import type { Oversikt } from '../services/api'

interface Props {
    data: Oversikt
    onLagret: () => Promise<void>
    onApneSkjema: (sysId: string) => void
    onUlagret: (ulagret: boolean) => void
    beskyttet: (handling: () => void) => void
}

// Rekkefølge etter SPEC: nøkkeltall over tidslinjen (K7), listen under nøkkeltallene (K8)
export default function OversiktVisning({ data, ...handlinger }: Props) {
    return (
        <div className="ra-stabel">
            <OverallokeringVarsel konsulenter={data.konsulenter} />
            <Nokkeltall tall={data.nokkeltall} />
            <SlutterSnart rader={data.slutterSnart} />
            <Tidslinje data={data} {...handlinger} />
            <Soylediagram konsulenter={data.konsulenter} />
            <Fordeling konsulenter={data.konsulenter} trengerOppdrag={data.trengerOppdrag} />
        </div>
    )
}
