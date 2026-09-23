import '@servicenow/sdk/global'
import { ApplicationMenu, Record, UiPage } from '@servicenow/sdk/core'
import side from '../client/index.html'

export const ressursside = UiPage({
    $id: Now.ID['ui-side-ressurs'],
    endpoint: 'x_kpmg_ra_b1_ressurs.do',
    description: 'Ressursallokering: nøkkeltall, tidslinje, diagram og kapasitet (SPEC 1.1)',
    html: side,
    direct: true,
})

const meny = ApplicationMenu({
    $id: Now.ID['meny-ressurs'],
    title: 'Ressursallokering',
    hint: 'Fordeling av konsulenter på kundeoppdrag',
    roles: ['itil'],
    active: true,
})

Record({
    $id: Now.ID['modul-oversikt'],
    table: 'sys_app_module',
    data: {
        title: 'Oversikt',
        application: meny,
        link_type: 'DIRECT',
        query: 'x_kpmg_ra_b1_ressurs.do',
        roles: ['itil'],
        active: true,
        order: 100,
    },
})

Record({
    $id: Now.ID['modul-skille-data'],
    table: 'sys_app_module',
    data: { title: 'Data', application: meny, link_type: 'SEPARATOR', roles: ['itil'], active: true, order: 200 },
})

Record({
    $id: Now.ID['modul-allokeringer'],
    table: 'sys_app_module',
    data: { title: 'Allokeringer', application: meny, link_type: 'LIST', name: 'x_kpmg_ra_b1_allokering', roles: ['itil'], active: true, order: 300 },
})

Record({
    $id: Now.ID['modul-konsulenter'],
    table: 'sys_app_module',
    data: { title: 'Konsulenter', application: meny, link_type: 'LIST', name: 'x_kpmg_ra_b1_konsulent', roles: ['itil'], active: true, order: 400 },
})

Record({
    $id: Now.ID['modul-kunder'],
    table: 'sys_app_module',
    data: { title: 'Kunder', application: meny, link_type: 'LIST', name: 'x_kpmg_ra_b1_kunde', roles: ['itil'], active: true, order: 500 },
})

Record({
    $id: Now.ID['modul-ny-allokering'],
    table: 'sys_app_module',
    data: { title: 'Ny allokering', application: meny, link_type: 'NEW', name: 'x_kpmg_ra_b1_allokering', roles: ['itil'], active: true, order: 600 },
})
