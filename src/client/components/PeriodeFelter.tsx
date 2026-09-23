import React from 'react'
import { DateTime } from '@servicenow/react-components/DateTime'
import { Input } from '@servicenow/react-components/Input'
import type { Utkast } from '../utils/skjema'

interface Props {
    utkast: Utkast
    onEndre: (endring: Partial<Utkast>) => void
}

// Fra-dato, til-dato og prosent – brukt både i tidslinjen (K6) og ved ny allokering (K1)
export default function PeriodeFelter({ utkast, onEndre }: Props) {
    return (
        <div className="ra-felter">
            <DateTime
                label="Fra-dato"
                type="date"
                format="yyyy-MM-dd"
                required
                value={utkast.fra}
                onValueSet={(e) => onEndre({ fra: e.detail.payload?.value || '' })}
            />
            <DateTime
                label="Til-dato"
                type="date"
                format="yyyy-MM-dd"
                required
                value={utkast.til}
                onValueSet={(e) => onEndre({ til: e.detail.payload?.value || '' })}
            />
            <Input
                label="Prosent"
                type="number"
                min={1}
                max={100}
                step={1}
                required
                value={utkast.prosent}
                onValueSet={(e) => onEndre({ prosent: e.detail.payload?.value || '' })}
            />
        </div>
    )
}
