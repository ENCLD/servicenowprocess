import React from 'react'

interface Tilstand {
    feil: Error | null
}

// Viser feilen i stedet for en blank side hvis noe krasjer under tegning.
// Bruker vanlig HTML med vilje, i tilfelle det er en komponent som feiler.
export default class Feilgrense extends React.Component<{ children: React.ReactNode }, Tilstand> {
    state: Tilstand = { feil: null }

    static getDerivedStateFromError(feil: Error): Tilstand {
        return { feil }
    }

    componentDidCatch(feil: Error, info: React.ErrorInfo) {
        console.error('Ressursallokering krasjet', feil, info.componentStack)
    }

    render() {
        if (!this.state.feil) return this.props.children
        return (
            <div className="ra-feilgrense" role="alert">
                <h1>Siden kunne ikke vises</h1>
                <p>{this.state.feil.message}</p>
                <pre>{this.state.feil.stack}</pre>
            </div>
        )
    }
}
