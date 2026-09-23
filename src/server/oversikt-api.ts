import { gs } from '@servicenow/glide'
import { byggOversikt } from './oversikt-modell'
import { hentAllokeringer, hentKonsulenter, hentKunder, iDag } from './data'

// GET /api/x_kpmg_ra_b1/ra/oversikt – all beregnet data UI-siden trenger
export function hentOversikt(request: any, response: any) {
    if (!gs.hasRole('itil')) {
        response.setStatus(403)
        response.setBody({ feil: 'Krever rollen itil.' })
        return
    }
    response.setBody(byggOversikt(hentKonsulenter(), hentKunder(), hentAllokeringer(), iDag()))
}
