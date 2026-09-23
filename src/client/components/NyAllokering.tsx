import React, { useEffect, useState } from 'react'
import { Alert } from '@servicenow/react-components/Alert'
import { Modal } from '@servicenow/react-components/Modal'
import { Select } from '@servicenow/react-components/Select'
import PeriodeFelter from './PeriodeFelter'
import { opprettAllokering, Oversikt } from '../services/api'
import { valider, Utkast } from '../utils/skjema'

interface Props {
    data: Oversikt
    apen: boolean
    onLukk: () => void
    onLagret: () => Promise<void>
    onUlagret: (ulagret: boolean) => void
}

const TOMT: Utkast = { fra: '', til: '', prosent: '100' }

// K1 – registrer allokering med alle felt fra SPEC seksjon 3
export default function NyAllokering({ data, apen, onLukk, onLagret, onUlagret }: Props) {
    const [konsulent, setKonsulent] = useState('')
    const [kunde, setKunde] = useState('')
    const [utkast, setUtkast] = useState<Utkast>(TOMT)
    const [feil, setFeil] = useState<string[]>([])
    const [lagrer, setLagrer] = useState(false)
    const endret = Boolean(konsulent || kunde || utkast.fra || utkast.til || utkast.prosent !== TOMT.prosent)

    useEffect(() => {
        if (apen) onUlagret(endret)
    }, [apen, endret, onUlagret])

    function nullstill() {
        setKonsulent('')
        setKunde('')
        setUtkast(TOMT)
        setFeil([])
        onUlagret(false)
        onLukk()
    }

    async function lagre() {
        const funn = [...(konsulent ? [] : ['Velg konsulent.']), ...(kunde ? [] : ['Velg kunde.']), ...valider(utkast)]
        setFeil(funn)
        if (funn.length) return
        setLagrer(true)
        try {
            await opprettAllokering({ konsulent, kunde, fra_dato: utkast.fra, til_dato: utkast.til, prosent: Number(utkast.prosent) })
            await onLagret()
            nullstill()
        } catch (e) {
            setFeil([`Kunne ikke lagre: ${(e as Error).message}`])
        } finally {
            setLagrer(false)
        }
    }

    return (
        <Modal
            opened={apen}
            size="md"
            headerLabel="Ny allokering"
            footerActions={[
                { label: 'Avbryt', variant: 'secondary', disabled: lagrer },
                { label: lagrer ? 'Lagrer …' : 'Lagre', variant: 'primary', disabled: lagrer },
            ]}
            onFooterActionClicked={(e) => (e.detail.payload.action.label === 'Avbryt' ? nullstill() : lagre())}
            onOpenedSet={(e) => {
                if (!e.detail.payload.value) nullstill()
            }}
        >
            <div className="ra-skjema">
                <Select
                    label="Konsulent"
                    required
                    search="contains"
                    items={data.konsulenter.map((k) => ({ id: k.sys_id, label: k.navn, sublabel: k.tittel }))}
                    selectedItem={konsulent}
                    onSelectedItemSet={(e) => setKonsulent(String(e.detail.payload.value))}
                />
                <Select
                    label="Kunde"
                    required
                    search="contains"
                    items={data.kunder.map((k) => ({ id: k.sys_id, label: k.navn }))}
                    selectedItem={kunde}
                    onSelectedItemSet={(e) => setKunde(String(e.detail.payload.value))}
                />
                <PeriodeFelter utkast={utkast} onEndre={(e) => setUtkast((u) => ({ ...u, ...e }))} />
                {feil.length > 0 && <Alert status="critical" header="Ikke lagret" content={feil.join(' ')} />}
            </div>
        </Modal>
    )
}
