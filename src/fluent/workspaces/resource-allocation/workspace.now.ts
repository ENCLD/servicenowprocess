import { Workspace, Acl } from '@servicenow/sdk/core'
import { raUserRole } from './roles.now'
import { raListConfig } from './list-menu.now'

export const raWorkspace = Workspace({
    $id: Now.ID['ra-workspace'],
    title: 'Resource Allocation',
    path: 'resource-allocation',
    landingPath: 'home',
    tables: ['x_2207143_k_test_assignment', 'sys_user', 'core_company'],
    listConfig: raListConfig,
})

Acl({
    $id: Now.ID['ra-workspace-acl'],
    localOrExisting: 'Existing',
    type: 'ux_route',
    operation: 'read',
    roles: [raUserRole],
    name: 'resource-allocation.*',
})
