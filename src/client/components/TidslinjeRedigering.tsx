import React, { useEffect, useState } from 'react'
import { Alert } from '@servicenow/react-components/Alert'
import { Button } from '@servicenow/react-components/Button'
import PeriodeFelter from './PeriodeFelter'
import { oppdaterAllokering, AllokeringRad } from '../services/api'
import { valider, Utkast } from '../utils/skjema'

interface Props {
    allokering: AllokeringRad
    onLagret: () => Promise<void>
    onLukk: () => void
    onApneSkjema: (sysId: string) => void
    onUlagret: (ulagret: boolean) => void
}

// K6 – redigering av fra-dato, til-dato og prosent direkte i tidslinjen
export default function TidslinjeRedigering({ allokering, onLagret, onLukk, onApneSkjema, onUlagret }: Props) {
    const opprinnelig: Utkast = { fra: allokering.fra, til: allokering.til, prosent: String(allokering.prosent) }
    const [utkast, setUtkast] = useState<Utkast>(opprinnelig)
    const [feil, setFeil] = useState<string[]>([])
    const [lagrer, setLagrer] = useState(false)
    const endret = utkast.fra !== opprinnelig.fra || utkast.til !== opprinnelig.til || utkast.prosent !== opprinnelig.prosent

    useEffect(() => onUlagret(endret), [endret, onUlagret])

    async function lagre() {
        const funn = valider(utkast)
        setFeil(funn)
        if (funn.length) return
        setLagrer(true)
        try {
            await oppdaterAllokering(allokering.sys_id, {
                fra_dato: utkast.fra,
                til_dato: utkast.til,
                prosent: Number(utkast.prosent),
            })
            onUlagret(false)
            await onLagret()
            onLukk()
        } catch (e) {
            setFeil([`Kunne ikke lagre: ${(e as Error).message}`])
        } finally {
            setLagrer(false)
        }
    }

    return (
        <div className="ra-redigering" role="group" aria-label={`Rediger ${allokering.kundeNavn} for ${allokering.konsulentNavn}`}>
            <strong>
                {allokering.konsulentNavn} · {allokering.kundeNavn}
            </strong>
            <PeriodeFelter utkast={utkast} onEndre={(e) => setUtkast((u) => ({ ...u, ...e }))} />
            {feil.length > 0 && <Alert status="critical" header="Ikke lagret" content={feil.join(' ')} />}
            <div className="ra-knapper">
                <Button label={lagrer ? 'Lagrer …' : 'Lagre'} variant="primary" disabled={lagrer || !endret} onClicked={lagre} />
                <Button label="Avbryt" variant="secondary" disabled={lagrer} onClicked={onLukk} />
                <Button label="Åpne skjema" variant="tertiary" disabled={lagrer} onClicked={() => onApneSkjema(allokering.sys_id)} />
            </div>
        </div>
    )
}
