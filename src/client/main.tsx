import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import Feilgrense from './components/Feilgrense'
import './app.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Feilgrense>
        <App />
    </Feilgrense>
)
