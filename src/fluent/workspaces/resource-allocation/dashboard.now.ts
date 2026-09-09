import { Dashboard } from '@servicenow/sdk/core'
import { raWorkspace } from './workspace.now'

const TABLE = 'x_2207143_k_test_assignment'
const ACTIVE_FILTER = 'active=true'
const ENDING_SOON_FILTER =
    'active=true^end_dateRELATIVEGE@day@ago@0^end_dateRELATIVELE@day@ahead@30'

// Widget layout follows the documented dataSources/metrics/groupBy shape for
// Dashboard widgets (single-score = Simple, vertical-bar = Group). The `field` on
// non-COUNT metrics and grouping by a date column aren't shown in the SDK's own
// examples, so double check those two widgets render as expected after install and
// adjust via the dashboard's "Configure widget" UI if the platform expects
// different property names.
export const ResourceAllocationDashboard = Dashboard({
    $id: Now.ID['ra-dashboard'],
    name: 'Resource Allocation',
    description: 'Overview of current allocations, capacity, and upcoming contract end dates.',
    tabs: [
        {
            $id: Now.ID['ra-dashboard-overview-tab'],
            name: 'Overview',
            widgets: [
                // Overview: total allocation % per consultant, summed across all their
                // active assignments -- this IS the "total share" for each consultant.
                {
                    $id: Now.ID['ra-widget-allocation-by-consultant'],
                    component: 'vertical-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Assignments',
                                sourceType: 'table',
                                tableOrViewName: TABLE,
                                filterQuery: ACTIVE_FILTER,
                                id: 'ds_allocation',
                            },
                        ],
                        headerTitle: 'Total Allocation % by Consultant',
                        metrics: [
                            {
                                dataSource: 'ds_allocation',
                                id: 'metric_allocation_sum',
                                field: 'allocation_percentage',
                                aggregateFunction: 'SUM',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [{ dataSource: 'ds_allocation', groupByField: 'consultant' }],
                                maxNumberOfGroups: 20,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 16,
                    width: 48,
                    position: { x: 0, y: 0 },
                },
                // Small KPI row, positioned above the timeline per the requested layout.
                {
                    $id: Now.ID['ra-widget-active-count'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Assignments',
                                sourceType: 'table',
                                tableOrViewName: TABLE,
                                filterQuery: ACTIVE_FILTER,
                                id: 'ds_active',
                            },
                        ],
                        headerTitle: 'Companies With an Active Contract',
                        metrics: [
                            {
                                dataSource: 'ds_active',
                                id: 'metric_active_companies',
                                field: 'company',
                                aggregateFunction: 'COUNT_DISTINCT',
                                axisId: 'primary',
                            },
                        ],
                    },
                    height: 10,
                    width: 16,
                    position: { x: 0, y: 16 },
                },
                {
                    $id: Now.ID['ra-widget-resources-count'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Assignments',
                                sourceType: 'table',
                                tableOrViewName: TABLE,
                                filterQuery: ACTIVE_FILTER,
                                id: 'ds_resources',
                            },
                        ],
                        headerTitle: 'Places Allocated (Consultants)',
                        metrics: [
                            {
                                dataSource: 'ds_resources',
                                id: 'metric_resources_count',
                                field: 'consultant',
                                aggregateFunction: 'COUNT_DISTINCT',
                                axisId: 'primary',
                            },
                        ],
                    },
                    height: 10,
                    width: 16,
                    position: { x: 16, y: 16 },
                },
                {
                    $id: Now.ID['ra-widget-ending-soon-count'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Assignments',
                                sourceType: 'table',
                                tableOrViewName: TABLE,
                                filterQuery: ENDING_SOON_FILTER,
                                id: 'ds_ending_soon',
                            },
                        ],
                        headerTitle: 'Ending Within 30 Days',
                        metrics: [
                            {
                                dataSource: 'ds_ending_soon',
                                id: 'metric_ending_soon_count',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                    },
                    height: 10,
                    width: 16,
                    position: { x: 32, y: 16 },
                },
                // Timeline: active contracts grouped by end date, so it reads left-to-right
                // as a chronological view of when the firm's current commitments wrap up.
                {
                    $id: Now.ID['ra-widget-timeline'],
                    component: 'vertical-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Assignments',
                                sourceType: 'table',
                                tableOrViewName: TABLE,
                                filterQuery: ACTIVE_FILTER,
                                id: 'ds_timeline',
                            },
                        ],
                        headerTitle: 'Contract Timeline (Ending Dates)',
                        metrics: [
                            {
                                dataSource: 'ds_timeline',
                                id: 'metric_timeline_count',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [{ dataSource: 'ds_timeline', groupByField: 'end_date' }],
                                maxNumberOfGroups: 50,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 16,
                    width: 48,
                    position: { x: 0, y: 26 },
                },
            ],
        },
    ],
    permissions: [],
    visibilities: [
        {
            $id: Now.ID['ra-dashboard-visibility'],
            experience: raWorkspace,
        },
    ],
})
