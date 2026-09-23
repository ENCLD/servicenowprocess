import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import { raPortalUserRole } from '../roles/portal-role.now'

const ASSIGNMENT_TABLE = 'x_2207143_k_test_assignment'
const MODULE_ROLES = [raPortalUserRole]

// Same "ending soon" window as the KPI widget: active, ending today through
// 30 days ahead. Whole-day bounds, since end_date is a date (not date/time) column.
const ENDING_SOON_FILTER = 'active=true^end_dateBETWEENjavascript:gs.beginningOfToday()@javascript:gs.daysAgoEnd(-30)'

export const raAppMenu = ApplicationMenu({
    $id: Now.ID['x_2207143_k_test_app_menu'],
    title: 'Resource Allocation',
    hint: 'Consultant assignments and the Resource Allocation portal',
    description: 'Navigation for the k-test Resource Allocation application.',
    roles: [raPortalUserRole],
    order: 100,
    active: true,
})

Record({
    $id: Now.ID['x_2207143_k_test_module_portal'],
    table: 'sys_app_module',
    data: {
        title: 'Portal',
        application: raAppMenu,
        link_type: 'DIRECT',
        query: 'x_2207143_k_test',
        window_name: '_blank',
        hint: 'Open the Resource Allocation portal',
        roles: MODULE_ROLES,
        active: true,
        order: 100,
    },
})

Record({
    $id: Now.ID['x_2207143_k_test_module_timeline'],
    table: 'sys_app_module',
    data: {
        title: 'Timeline',
        application: raAppMenu,
        link_type: 'DIRECT',
        query: 'x_2207143_k_test?id=x_2207143_k_test_timeline',
        window_name: '_blank',
        hint: 'Open the portal Timeline page',
        roles: MODULE_ROLES,
        active: true,
        order: 200,
    },
})

Record({
    $id: Now.ID['x_2207143_k_test_module_sep_assignments'],
    table: 'sys_app_module',
    data: {
        title: 'Assignments',
        application: raAppMenu,
        link_type: 'SEPARATOR',
        roles: MODULE_ROLES,
        active: true,
        order: 300,
    },
})

Record({
    $id: Now.ID['x_2207143_k_test_module_all'],
    table: 'sys_app_module',
    data: {
        title: 'All Assignments',
        application: raAppMenu,
        link_type: 'LIST',
        name: ASSIGNMENT_TABLE,
        roles: MODULE_ROLES,
        active: true,
        order: 400,
    },
})

Record({
    $id: Now.ID['x_2207143_k_test_module_active'],
    table: 'sys_app_module',
    data: {
        title: 'Active',
        application: raAppMenu,
        link_type: 'LIST',
        name: ASSIGNMENT_TABLE,
        filter: 'active=true',
        roles: MODULE_ROLES,
        active: true,
        order: 500,
    },
})

Record({
    $id: Now.ID['x_2207143_k_test_module_ending_soon'],
    table: 'sys_app_module',
    data: {
        title: 'Ending in 30 Days',
        application: raAppMenu,
        link_type: 'LIST',
        name: ASSIGNMENT_TABLE,
        filter: ENDING_SOON_FILTER,
        roles: MODULE_ROLES,
        active: true,
        order: 600,
    },
})

Record({
    $id: Now.ID['x_2207143_k_test_module_new'],
    table: 'sys_app_module',
    data: {
        title: 'Create New',
        application: raAppMenu,
        link_type: 'NEW',
        name: ASSIGNMENT_TABLE,
        roles: MODULE_ROLES,
        active: true,
        order: 700,
    },
})
