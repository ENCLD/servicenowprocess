import '@servicenow/sdk/global'
import { Dashboard } from '@servicenow/sdk/core'

// Layout uses a 12-column grid. componentProps below only set a title —
// each widget still needs to be pointed at a Report from the Dashboard's
// own "Configure widget" UI after first deploy (componentProps' data-source
// shape isn't part of the SDK's public docs, so it isn't safe to guess here).
export const ResourceAllocationDashboard = Dashboard({
    $id: Now.ID['ra-dashboard'],
    name: 'Resource Allocation',
    description: 'Overview of current allocations and upcoming end dates.',
    tabs: [
        {
            $id: Now.ID['ra-dashboard-overview-tab'],
            name: 'Overview',
            widgets: [
                {
                    $id: Now.ID['ra-widget-active-count'],
                    component: 'single-score',
                    componentProps: { title: 'Active Allocations' },
                    height: 4,
                    width: 3,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['ra-widget-resources-count'],
                    component: 'single-score',
                    componentProps: { title: 'Resources Allocated' },
                    height: 4,
                    width: 3,
                    position: { x: 3, y: 0 },
                },
                {
                    $id: Now.ID['ra-widget-avg-allocation'],
                    component: 'single-score',
                    componentProps: { title: 'Avg. Allocation %' },
                    height: 4,
                    width: 3,
                    position: { x: 6, y: 0 },
                },
                {
                    $id: Now.ID['ra-widget-ending-soon-count'],
                    component: 'single-score',
                    componentProps: { title: 'Ending Within 30 Days' },
                    height: 4,
                    width: 3,
                    position: { x: 9, y: 0 },
                },
                {
                    $id: Now.ID['ra-widget-upcoming-end-dates'],
                    component: 'list',
                    componentProps: { title: 'Upcoming End Dates' },
                    height: 10,
                    width: 12,
                    position: { x: 0, y: 4 },
                },
            ],
        },
    ],
    permissions: [],
    visibilities: [
        {
            $id: Now.ID['393730a9fd1a4d82b757863387086dd0'],
            experience: '08c73d60537101100834ddeeff7b1287',
        },
    ],
})
