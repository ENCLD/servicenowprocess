import React from 'react'
import { NowRecordListConnected } from '@servicenow/react-components/NowRecordListConnected'
import { TABELL_ALLOKERING } from '../services/api'

interface Props {
    onApne: (sysId: string) => void
    onNy: () => void
}

export default function AlleAllokeringer({ onApne, onNy }: Props) {
    return (
        <NowRecordListConnected
            table={TABELL_ALLOKERING}
            listTitle="Alle allokeringer"
            columns="konsulent,kunde,fra_dato,til_dato,prosent"
            limit={50}
            onRowClicked={(e) => onApne(e.detail.payload.sys_id)}
            onNewActionClicked={onNy}
        />
    )
}
