import { useCallback, useEffect, useState } from 'react'
import { hentOversikt, Oversikt } from '../services/api'

// Én felles kilde for all beregnet data. Etter lagring kalles last() på nytt,
// slik at K2, K4, K7, K8 og K9 oppdateres uten manuell reload (K6).
export function useOversikt() {
    const [data, setData] = useState<Oversikt | null>(null)
    const [feil, setFeil] = useState<string | null>(null)
    const [laster, setLaster] = useState(true)

    const last = useCallback(async () => {
        setLaster(true)
        try {
            setData(await hentOversikt())
            setFeil(null)
        } catch (e) {
            setFeil((e as Error).message)
        } finally {
            setLaster(false)
        }
    }, [])

    useEffect(() => {
        last()
    }, [last])

    return { data, feil, laster, last }
}
