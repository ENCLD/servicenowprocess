import { UxListMenuConfig } from '@servicenow/sdk/core'

const ASSIGNMENT_COLUMNS = 'consultant,company,start_date,end_date,allocation_percentage,active'

// "Ending soon" = still active and its end date falls within the next 30 days,
// using the platform's relative-date encoded query operators.
const ENDING_SOON_CONDITION =
    'active=true^end_dateRELATIVEGE@day@ago@0^end_dateRELATIVELE@day@ahead@30'

export const raListConfig = UxListMenuConfig({
    $id: Now.ID['ra-list-config'],
    name: 'Resource Allocation List Configuration',
    categories: [
        {
            $id: Now.ID['ra-assignments-category'],
            title: 'Assignments',
            order: 10,
            lists: [
                {
                    $id: Now.ID['ra-assignments-active'],
                    title: 'Active',
                    order: 10,
                    table: 'x_2207143_k_test_assignment',
                    columns: ASSIGNMENT_COLUMNS,
                    condition: 'active=true^EQ',
                },
                {
                    $id: Now.ID['ra-assignments-ending-soon'],
                    title: 'Ending Soon (30 Days)',
                    order: 20,
                    table: 'x_2207143_k_test_assignment',
                    columns: ASSIGNMENT_COLUMNS,
                    condition: ENDING_SOON_CONDITION,
                },
                {
                    $id: Now.ID['ra-assignments-all'],
                    title: 'All',
                    order: 30,
                    table: 'x_2207143_k_test_assignment',
                    columns: ASSIGNMENT_COLUMNS,
                    condition: '',
                },
            ],
        },
        {
            $id: Now.ID['ra-directory-category'],
            title: 'Directory',
            order: 20,
            lists: [
                {
                    $id: Now.ID['ra-consultants'],
                    title: 'Consultants',
                    order: 10,
                    table: 'sys_user',
                    columns: 'name,title,email,active',
                    condition: 'active=true^EQ',
                },
                {
                    $id: Now.ID['ra-companies'],
                    title: 'Client Companies',
                    order: 20,
                    table: 'core_company',
                    columns: 'name,customer',
                    condition: 'customer=true^EQ',
                },
            ],
        },
    ],
})
