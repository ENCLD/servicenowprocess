import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_2207143_k_test_assignment',
    view: default_view,
    columns: [
        { element: 'consultant', position: 0 },
        { element: 'company', position: 1 },
        { element: 'start_date', position: 2 },
        { element: 'end_date', position: 3 },
        { element: 'allocation_percentage', position: 4 },
        { element: 'active', position: 5 },
    ],
})
