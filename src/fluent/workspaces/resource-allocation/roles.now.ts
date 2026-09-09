import { Role, Applicability } from '@servicenow/sdk/core'

export const raUserRole = Role({
    name: 'x_2207143_k_test.user',
    description: 'Can view and manage Resource Allocation assignments.',
    containsRoles: ['canvas_user'],
})

export const raApplicability = Applicability({
    $id: Now.ID['ra-applicability'],
    name: 'Resource Allocation Users',
    roles: [raUserRole],
})
