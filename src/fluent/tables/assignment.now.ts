import '@servicenow/sdk/global'
import { Table, ReferenceColumn, DateColumn, IntegerColumn, BooleanColumn } from '@servicenow/sdk/core'
import { raUserRole } from '../workspaces/resource-allocation/roles.now'

// One consultant's placement with one client company for a period of time at a
// given allocation percentage. "Total share" for a consultant is not stored here —
// it's the SUM of allocation_percentage across their active rows, computed on the
// dashboard's bar chart and in reports rather than duplicated as a column.
export const x_2207143_k_test_assignment = Table({
    name: 'x_2207143_k_test_assignment',
    label: 'Resource Assignment',
    display: 'consultant',
    extensible: false,
    allowWebServiceAccess: true,
    audit: true,
    createAccessControls: true,
    userRole: raUserRole,
    schema: {
        consultant: ReferenceColumn({
            label: 'Consultant',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        company: ReferenceColumn({
            label: 'Client Company',
            referenceTable: 'core_company',
            mandatory: true,
        }),
        start_date: DateColumn({
            label: 'Start Date',
            mandatory: true,
        }),
        end_date: DateColumn({
            label: 'End Date',
            mandatory: true,
        }),
        allocation_percentage: IntegerColumn({
            label: 'Allocation %',
            mandatory: true,
            default: '100',
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})
