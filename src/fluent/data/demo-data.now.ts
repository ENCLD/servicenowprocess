import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample companies, consultants, and assignments so the dashboard has something to
// show right after install. All records use installMethod 'demo', so they only load
// when demo data is requested (never on a production install).
const demo = { installMethod: 'demo' as const }

const acmeFinancial = Record({
    $id: Now.ID['ra-demo-company-acme'],
    $meta: demo,
    table: 'core_company',
    data: { name: 'Acme Financial Group', customer: true },
})

const northwindLogistics = Record({
    $id: Now.ID['ra-demo-company-northwind'],
    $meta: demo,
    table: 'core_company',
    data: { name: 'Northwind Logistics', customer: true },
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

const emilyChen = Record({
    $id: Now.ID['ra-demo-consultant-emily'],
    $meta: demo,
    table: 'sys_user',
    data: {
        user_name: 'emily.chen',
        first_name: 'Emily',
        last_name: 'Chen',
        name: 'Emily Chen',
        title: 'Principal Consultant',
        email: 'emily.chen@example.com',
        active: true,
    },
})

const noahAndersen = Record({
    $id: Now.ID['ra-demo-consultant-noah'],
    $meta: demo,
    table: 'sys_user',
    data: {
        user_name: 'noah.andersen',
        first_name: 'Noah',
        last_name: 'Andersen',
        name: 'Noah Andersen',
        title: 'Consultant',
        email: 'noah.andersen@example.com',
        active: true,
    },
})

Record({
    $id: Now.ID['ra-demo-assignment-1'],
    $meta: demo,
    table: 'x_2207143_k_test_assignment',
    data: {
        consultant: mariaSolberg,
        company: acmeFinancial,
        start_date: '2026-06-01',
        end_date: '2027-05-31',
        allocation_percentage: 60,
        active: true,
    },
})

Record({
    $id: Now.ID['ra-demo-assignment-2'],
    $meta: demo,
    table: 'x_2207143_k_test_assignment',
    data: {
        consultant: mariaSolberg,
        company: northwindLogistics,
        start_date: '2026-07-01',
        end_date: '2026-09-25',
        allocation_percentage: 40,
        active: true,
    },
})

Record({
    $id: Now.ID['ra-demo-assignment-3'],
    $meta: demo,
    table: 'x_2207143_k_test_assignment',
    data: {
        consultant: jonasBerg,
        company: globexRetail,
        start_date: '2026-01-15',
        end_date: '2026-09-30',
        allocation_percentage: 100,
        active: true,
    },
})

Record({
    $id: Now.ID['ra-demo-assignment-4'],
    $meta: demo,
    table: 'x_2207143_k_test_assignment',
    data: {
        consultant: emilyChen,
        company: acmeFinancial,
        start_date: '2026-03-01',
        end_date: '2027-02-28',
        allocation_percentage: 80,
        active: true,
    },
})

Record({
    $id: Now.ID['ra-demo-assignment-5'],
    $meta: demo,
    table: 'x_2207143_k_test_assignment',
    data: {
        consultant: emilyChen,
        company: northwindLogistics,
        start_date: '2026-05-01',
        end_date: '2026-11-30',
        allocation_percentage: 20,
        active: true,
    },
})

Record({
    $id: Now.ID['ra-demo-assignment-6'],
    $meta: demo,
    table: 'x_2207143_k_test_assignment',
    data: {
        consultant: noahAndersen,
        company: globexRetail,
        start_date: '2026-08-01',
        end_date: '2026-12-31',
        allocation_percentage: 50,
        active: true,
    },
})

Record({
    $id: Now.ID['ra-demo-assignment-7'],
    $meta: demo,
    table: 'x_2207143_k_test_assignment',
    data: {
        consultant: jonasBerg,
        company: acmeFinancial,
        start_date: '2025-01-01',
        end_date: '2026-08-31',
        allocation_percentage: 100,
        active: false,
    },
})
