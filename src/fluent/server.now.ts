import '@servicenow/sdk/global'
import { BusinessRule, RestApi } from '@servicenow/sdk/core'
import { validerAllokeringFoerLagring, varsleOverallokering } from '../server/allokering-regler'
import { hentOversikt } from '../server/oversikt-api'

// K1
BusinessRule({
    $id: Now.ID['br-valider-allokering'],
    name: 'Valider allokering',
    table: 'x_2207143_ra_b1_allokering',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    active: true,
    script: validerAllokeringFoerLagring,
})

// K3
BusinessRule({
    $id: Now.ID['br-varsle-overallokering'],
    name: 'Varsle overallokering',
    table: 'x_2207143_ra_b1_allokering',
    when: 'after',
    action: ['insert', 'update'],
    order: 200,
    active: true,
    script: varsleOverallokering,
})

// GET /api/x_2207143_ra_b1/ra/oversikt
RestApi({
    $id: Now.ID['api-ra'],
    name: 'Ressursallokering',
    serviceId: 'ra',
    produces: 'application/json',
    routes: [
        {
            $id: Now.ID['api-ra-oversikt'],
            name: 'Oversikt',
            method: 'GET',
            path: '/oversikt',
            script: hentOversikt,
        },
    ],
})
