import React from 'react'
import { Card } from '@servicenow/react-components/Card'
import { CardHeader } from '@servicenow/react-components/CardHeader'
import type { KonsulentRad } from '../services/api'

const HOYDE = 220
const TOPP = 16
const BUNN = 56

// K4 – total allokering (%) per konsulent i dag, med 100 %-linje.
// Komponentbiblioteket har ingen diagramkomponent, derfor en enkel SVG.
export default function Soylediagram({ konsulenter }: { konsulenter: KonsulentRad[] }) {
    const maks = Math.max(125, Math.ceil(Math.max(...konsulenter.map((k) => k.totalIDag), 0) / 25) * 25)
    const bredde = Math.max(480, konsulenter.length * 72)
    const kol = bredde / Math.max(konsulenter.length, 1)
    const y = (verdi: number) => TOPP + (HOYDE - TOPP - BUNN) * (1 - verdi / maks)

    return (
        <Card>
            <CardHeader heading={{ label: 'Total allokering i dag', level: 2, size: 'md' }} />
            <div className="ra-diagram">
                <svg viewBox={`0 0 ${bredde} ${HOYDE}`} role="img" aria-label="Søylediagram over total allokering per konsulent i dag">
                    {konsulenter.map((k, i) => {
                        const x = i * kol + kol * 0.2
                        const klasse = k.totalIDag > 100 ? 'over' : k.totalIDag < 100 ? 'under' : 'full'
                        return (
                            <g key={k.sys_id}>
                                <title>{`${k.navn}: ${k.totalIDag} %`}</title>
                                <rect
                                    className={`ra-diagram__soyle ra-diagram__soyle--${klasse}`}
                                    x={x}
                                    y={y(k.totalIDag)}
                                    width={kol * 0.6}
                                    height={Math.max(0, y(0) - y(k.totalIDag))}
                                    rx={3}
                                />
                                <text className="ra-diagram__verdi" x={x + kol * 0.3} y={y(k.totalIDag) - 4} textAnchor="middle">
                                    {k.totalIDag} %
                                </text>
                                <text className="ra-diagram__navn" x={x + kol * 0.3} y={HOYDE - BUNN + 16} textAnchor="middle">
                                    {k.navn.split(' ')[0]}
                                </text>
                            </g>
                        )
                    })}
                    <line className="ra-diagram__grense" x1={0} x2={bredde} y1={y(100)} y2={y(100)} />
                    <text className="ra-diagram__grensetekst" x={bredde - 4} y={y(100) - 4} textAnchor="end">
                        100 %
                    </text>
                    <line className="ra-diagram__akse" x1={0} x2={bredde} y1={y(0)} y2={y(0)} />
                </svg>
            </div>
        </Card>
    )
}
