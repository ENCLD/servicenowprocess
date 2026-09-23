import React from 'react'
import { Card } from '@servicenow/react-components/Card'
import { CardHeader } from '@servicenow/react-components/CardHeader'
import type { Oversikt } from '../services/api'

// K8 – allerede sortert etter nærmeste til-dato på serveren. Listen er beregnet
// (ikke et rått tabelluttrekk), derfor en enkel tabell i stedet for NowRecordListConnected.
export default function SlutterSnart({ rader }: { rader: Oversikt['slutterSnart'] }) {
    return (
        <Card>
            <CardHeader heading={{ label: 'Oppdrag som slutter innen 30 dager', level: 2, size: 'md' }} />
            {rader.length === 0 ? (
                <p className="ra-tom">Ingen oppdrag slutter de neste 30 dagene.</p>
            ) : (
                <table className="ra-tabell">
                    <thead>
                        <tr>
                            <th scope="col">Konsulent</th>
                            <th scope="col">Kunde</th>
                            <th scope="col">Til-dato</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rader.map((r) => (
                            <tr key={r.sys_id}>
                                <td>{r.konsulentNavn}</td>
                                <td>{r.kundeNavn}</td>
                                <td>{r.til}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </Card>
    )
}
