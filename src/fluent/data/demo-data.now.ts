import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// A small sample dataset so the portal has something to show right after
// install, without much clutter to test the update-set / import workflow
// against. All records use installMethod 'demo', so they only load when demo
// data is requested (never on a production install).
const demo = { installMethod: 'demo' as const }

const acmeFinancial = Record({
    $id: Now.ID['ra-demo-company-acme'],
    $meta: demo,
    table: 'core_company',
    data: { name: 'Acme Financial Group', customer: true },
})

const globexRetail = Record({
    $id: Now.ID['ra-demo-company-globex'],
    $meta: demo,
    table: 'core_company',
    data: { name: 'Globex Retail', customer: true },
})

const mariaSolberg = Record({
    $id: Now.ID['ra-demo-consultant-maria'],
    $meta: demo,
    table: 'sys_user',
    data: {
        user_name: 'maria.solberg',
        first_name: 'Maria',
        last_name: 'Solberg',
        name: 'Maria Solberg',
        title: 'Senior Consultant',
        email: 'maria.solberg@example.com',
        active: true,
    },
})

const jonasBerg = Record({
    $id: Now.ID['ra-demo-consultant-jonas'],
    $meta: demo,
    table: 'sys_user',
    data: {
        user_name: 'jonas.berg',
        first_name: 'Jonas',
        last_name: 'Berg',
        name: 'Jonas Berg',
        title: 'Consultant',
        email: 'jonas.berg@example.com',
        active: true,
    },
})

// Long-running active assignment
Record({
    $id: Now.ID['ra-demo-assignment-1'],
    $meta: demo,
    table: 'x_2207143_k_test_assignment',
    data: {
        consultant: mariaSolberg,
        company: acmeFinancial,
        start_date: '2026-06-01',
        end_date: '2027-05-31',
        end_month: '2027-05',
        allocation_percentage: 60,
        active: true,
    },
})

// Active assignment ending within 30 days -- exercises the "Ending Soon" KPI
Record({
    $id: Now.ID['ra-demo-assignment-2'],
    $meta: demo,
    table: 'x_2207143_k_test_assignment',
    data: {
        consultant: jonasBerg,
        company: globexRetail,
        start_date: '2026-01-15',
        end_date: '2026-09-30',
        end_month: '2026-09',
        allocation_percentage: 100,
        active: true,
    },
})

// Historical / inactive assignment
Record({
    $id: Now.ID['ra-demo-assignment-3'],
    $meta: demo,
    table: 'x_2207143_k_test_assignment',
    data: {
        consultant: jonasBerg,
        company: acmeFinancial,
        start_date: '2025-01-01',
        end_date: '2026-08-31',
        end_month: '2026-08',
        allocation_percentage: 100,
        active: false,
    },
})
