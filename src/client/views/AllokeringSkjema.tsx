import React, { useEffect } from 'react'
import { RecordProvider } from '@servicenow/react-components/RecordContext'
import { useRecord } from '@servicenow/react-components'
import { FormActionBar } from '@servicenow/react-components/FormActionBar'
import { FormColumnLayout } from '@servicenow/react-components/FormColumnLayout'
import { TABELL_ALLOKERING } from '../services/api'

// Rapporterer skjemaets ulagrede endringer opp til appen, slik at navigering kan advare
function UlagretVakt({ onUlagret }: { onUlagret: (ulagret: boolean) => void }) {
    const { form } = useRecord()
    useEffect(() => onUlagret(form.isDirty), [form.isDirty, onUlagret])
    useEffect(() => () => onUlagret(false), [onUlagret])
    return null
}

// Standard postskjema for én allokering. Forretningsreglene (K1, K3) viser meldingene sine her.
export default function AllokeringSkjema({ sysId, onUlagret }: { sysId: string; onUlagret: (u: boolean) => void }) {
    return (
        <RecordProvider table={TABELL_ALLOKERING} sysId={sysId} isReadOnly={false}>
            <UlagretVakt onUlagret={onUlagret} />
            <div className="ra-skjema-side">
                <FormActionBar />
                <FormColumnLayout />
            </div>
        </RecordProvider>
    )
}
