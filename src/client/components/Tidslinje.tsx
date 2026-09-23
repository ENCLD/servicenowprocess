import React, { useState } from 'react'
import { Card } from '@servicenow/react-components/Card'
import { CardHeader } from '@servicenow/react-components/CardHeader'
import TidslinjeRedigering from './TidslinjeRedigering'
import type { Oversikt } from '../services/api'
import { bredde, fordelSpor, klipp, lagVindu, maaneder, synlig, venstre } from '../utils/tidslinje'

interface Props {
    data: Oversikt
    onLagret: () => Promise<void>
    onApneSkjema: (sysId: string) => void
    onUlagret: (ulagret: boolean) => void
    beskyttet: (handling: () => void) => void
}

// K5 – én rad per konsulent, allokeringene som perioder langs en tidsakse.
// Klikk på en periode for å redigere den i tidslinjen (K6).
export default function Tidslinje({ data, onLagret, onApneSkjema, onUlagret, beskyttet }: Props) {
    const [valgt, setValgt] = useState<string | null>(null)
    const vindu = lagVindu(data.iDag)
    const velg = (id: string | null) => beskyttet(() => setValgt(id))

    return (
        <Card>
            <CardHeader
                heading={{ label: 'Tidslinje', level: 2, size: 'md' }}
                caption={{ label: `${vindu.fra} – ${vindu.til}. Klikk på en periode for å endre datoer og prosent.` }}
            />
            <div className="ra-tidslinje">
                <div className="ra-tidslinje__rad ra-tidslinje__rad--akse" aria-hidden="true">
                    <div className="ra-tidslinje__navn" />
                    <div className="ra-tidslinje__spor">
                        {maaneder(vindu).map((m) => (
                            <span key={m.dato} className="ra-tidslinje__maaned" style={{ left: `${venstre(vindu, m.dato)}%` }}>
                                {m.navn}
                            </span>
                        ))}
                    </div>
                </div>
                {data.konsulenter.map((k) => {
                    const egne = data.allokeringer.filter((a) => a.konsulent === k.sys_id && synlig(vindu, a))
                    const spor = fordelSpor(egne)
                    const antallSpor = Math.max(1, ...Array.from(spor.values()).map((s) => s + 1))
                    const redigeres = egne.find((a) => a.sys_id === valgt)
                    return (
                        <div key={k.sys_id} className="ra-tidslinje__gruppe">
                            <div className="ra-tidslinje__rad">
                                <div className="ra-tidslinje__navn">
                                    <span>{k.navn}</span>
                                    <small className={k.overallokeringer.length ? 'ra-over' : undefined}>
                                        {k.tittel} · {k.totalIDag} % i dag{k.overallokeringer.length ? ' · overallokert' : ''}
                                    </small>
                                </div>
                                <div className="ra-tidslinje__spor" style={{ height: `${antallSpor * 2.25 + 0.5}rem` }}>
                                    <span className="ra-tidslinje__idag" style={{ left: `${venstre(vindu, data.iDag)}%` }} />
                                    {egne.length === 0 && <span className="ra-tidslinje__ingen">Ingen oppdrag</span>}
                                    {egne.map((a) => {
                                        const vist = klipp(vindu, a)
                                        const tekst = `${a.kundeNavn} · ${a.prosent} %`
                                        return (
                                            <button
                                                type="button"
                                                key={a.sys_id}
                                                className={[
                                                    'ra-periode',
                                                    a.overallokert && 'ra-periode--over',
                                                    a.sys_id === valgt && 'ra-periode--valgt',
                                                ].filter(Boolean).join(' ')}
                                                style={{
                                                    left: `${venstre(vindu, vist.fra)}%`,
                                                    width: `${bredde(vindu, vist.fra, vist.til)}%`,
                                                    top: `${(spor.get(a.sys_id) || 0) * 2.25 + 0.25}rem`,
                                                }}
                                                title={`${tekst} (${a.fra} – ${a.til})${a.overallokert ? ' – overallokert' : ''}`}
                                                aria-label={`${tekst}, ${a.fra} til ${a.til}. Rediger.`}
                                                aria-expanded={a.sys_id === valgt}
                                                onClick={() => velg(a.sys_id === valgt ? null : a.sys_id)}
                                            >
                                                {tekst}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                            {redigeres && (
                                <TidslinjeRedigering
                                    key={redigeres.sys_id}
                                    allokering={redigeres}
                                    onLagret={onLagret}
                                    onLukk={() => {
                                        onUlagret(false)
                                        setValgt(null)
                                    }}
                                    onApneSkjema={onApneSkjema}
                                    onUlagret={onUlagret}
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        </Card>
    )
}
