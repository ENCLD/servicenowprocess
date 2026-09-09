import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_2207143_k_test_assignment',
    view: default_view,
    sections: [
        {
            caption: 'Assignment Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'consultant', type: 'table_field' },
                        { field: 'company', type: 'table_field' },
                        { field: 'active', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'start_date', type: 'table_field' },
                        { field: 'end_date', type: 'table_field' },
                        { field: 'allocation_percentage', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})
