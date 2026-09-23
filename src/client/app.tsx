import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Alert } from '@servicenow/react-components/Alert'
import { Button } from '@servicenow/react-components/Button'
import { Heading } from '@servicenow/react-components/Heading'
import { Loader } from '@servicenow/react-components/Loader'
import { Modal } from '@servicenow/react-components/Modal'
import OversiktVisning from './views/OversiktVisning'
import AlleAllokeringer from './views/AlleAllokeringer'
import NyAllokering from './components/NyAllokering'
import { useOversikt } from './hooks/useOversikt'
import { Rute, apneVanligSkjema, ruteFraUrl, skrivRute } from './utils/navigering'

export default function App() {
    const [rute, setRute] = useState<Rute>(ruteFraUrl)
    const [nyApen, setNyApen] = useState(false)
    const { data, feil, laster, last } = useOversikt()

    // Ulagrede endringer i tidslinjen, ny-dialogen eller skjemaet
    const ulagret = useRef(false)
    const settUlagret = useCallback((verdi: boolean) => (ulagret.current = verdi), [])
    const [venter, setVenter] = useState<(() => void) | null>(null)
    const beskyttet = useCallback((handling: () => void) => {
        if (ulagret.current) setVenter(() => handling)
        else handling()
    }, [])

    useEffect(() => {
        const tilbake = () => setRute(ruteFraUrl())
        const forlat = (e: BeforeUnloadEvent) => {
            if (ulagret.current) e.preventDefault()
        }
        window.addEventListener('popstate', tilbake)
        window.addEventListener('beforeunload', forlat)
        return () => {
            window.removeEventListener('popstate', tilbake)
            window.removeEventListener('beforeunload', forlat)
        }
    }, [])

    const gaaTil = (ny: Rute) =>
        beskyttet(() => {
            ulagret.current = false
            skrivRute(ny)
            setRute(ny)
            if (ny.visning === 'oversikt') last()
        })
    const apneSkjema = (id: string) =>
        beskyttet(() => {
            ulagret.current = false
            apneVanligSkjema(id)
        })

    return (
        <main className="ra-app">
            <header className="ra-topp">
                <Heading label="Ressursallokering" level={1} variant="header-primary" hasNoMargin />
                <nav className="ra-knapper" aria-label="Visninger">
                    <Button label="Oversikt" variant={rute.visning === 'oversikt' ? 'primary' : 'secondary'} onClicked={() => gaaTil({ visning: 'oversikt' })} />
                    <Button label="Alle allokeringer" variant={rute.visning === 'allokeringer' ? 'primary' : 'secondary'} onClicked={() => gaaTil({ visning: 'allokeringer' })} />
                    <Button label="Ny allokering" icon="plus-outline" variant="secondary" disabled={!data} onClicked={() => beskyttet(() => setNyApen(true))} />
                </nav>
            </header>

            {feil && <Alert status="critical" header="Kunne ikke hente data" content={feil} />}

            {rute.visning === 'oversikt' &&
                (data ? (
                    <OversiktVisning data={data} onLagret={last} onApneSkjema={apneSkjema} onUlagret={settUlagret} beskyttet={beskyttet} />
                ) : (
                    laster && <Loader label="Henter oversikt" />
                ))}
            {rute.visning === 'allokeringer' && (
                <AlleAllokeringer onApne={apneSkjema} onNy={() => apneSkjema('-1')} />
            )}

            {data && <NyAllokering data={data} apen={nyApen} onLukk={() => setNyApen(false)} onLagret={last} onUlagret={settUlagret} />}

            <Modal
                opened={venter !== null}
                size="sm"
                headerLabel="Ulagrede endringer"
                content="Du har endringer som ikke er lagret. Vil du forkaste dem?"
                footerActions={[
                    { label: 'Fortsett å redigere', variant: 'secondary' },
                    { label: 'Forkast endringer', variant: 'primary-negative' },
                ]}
                onFooterActionClicked={(e) => {
                    const handling = venter
                    setVenter(null)
                    if (e.detail.payload.action.label === 'Forkast endringer' && handling) {
                        ulagret.current = false
                        handling()
                    }
                }}
                onOpenedSet={(e) => {
                    if (!e.detail.payload.value) setVenter(null)
                }}
            />
        </main>
    )
}
