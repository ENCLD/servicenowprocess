import React from 'react'
import { Card } from '@servicenow/react-components/Card'
import { CardHeader } from '@servicenow/react-components/CardHeader'
import type { KonsulentRad, Oversikt } from '../services/api'

interface Props {
    konsulenter: KonsulentRad[]
    trengerOppdrag: Oversikt['trengerOppdrag']
}

// K2 (total fordeling i dag) og K9 (hvem trenger oppdrag de neste 30 dagene)
export default function Fordeling({ konsulenter, trengerOppdrag }: Props) {
    return (
        <div className="ra-to-kolonner">
            <Card>
                <CardHeader heading={{ label: 'Total fordeling per konsulent', level: 2, size: 'md' }} caption={{ label: 'Aktive allokeringer i dag' }} />
                <table className="ra-tabell">
                    <thead>
                        <tr>
                            <th scope="col">Konsulent</th>
                            <th scope="col">Tittel</th>
                            <th scope="col" className="ra-tall">I dag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {konsulenter.map((k) => (
                            <tr key={k.sys_id} className={k.totalIDag > 100 ? 'ra-rad--over' : undefined}>
                                <td>{k.navn}</td>
                                <td>{k.tittel}</td>
                                <td className="ra-tall">{k.totalIDag} %</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
            <Card>
                <CardHeader
                    heading={{ label: 'Trenger oppdrag', level: 2, size: 'md' }}
                    caption={{ label: 'Under 100 % en eller flere dager de neste 30 dagene' }}
                />
                {trengerOppdrag.length === 0 ? (
                    <p className="ra-tom">Alle konsulenter er fullt allokert de neste 30 dagene.</p>
                ) : (
                    <table className="ra-tabell">
                        <thead>
                            <tr>
                                <th scope="col">Konsulent</th>
                                <th scope="col" className="ra-tall">Ledig kapasitet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trengerOppdrag.map((t) => (
                                <tr key={t.sys_id}>
                                    <td>{t.navn}</td>
                                    <td className="ra-tall">{t.ledigKapasitet} %</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </Card>
        </div>
    )
}
