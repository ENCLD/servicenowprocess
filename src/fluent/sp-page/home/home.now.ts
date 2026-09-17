import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { chartWidget } from '../../sp-widget/chart/widget.now'
import { kpiWidget } from '../../sp-widget/kpi/widget.now'
import { timelineWidget } from '../../sp-widget/timeline/widget.now'

export const homePage = SPPage({
    pageId: 'x_2207143_k_test_home',
    title: 'Resource Allocation',
    public: false,
    draft: false,
    dynamicTitleStructure: 'Resource Allocation - ${portal.title}',
    containers: [
        {
            $id: Now.ID['x_2207143_k_test_home_container_1'],
            name: 'Main Content',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_2207143_k_test_home_row_chart'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_2207143_k_test_home_col_chart'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_2207143_k_test_home_instance_chart'],
                                    widget: chartWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    $id: Now.ID['x_2207143_k_test_home_row_kpi'],
                    order: 200,
                    columns: [
                        {
                            $id: Now.ID['x_2207143_k_test_home_col_kpi'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_2207143_k_test_home_instance_kpi'],
                                    widget: kpiWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    $id: Now.ID['x_2207143_k_test_home_row_timeline'],
                    order: 300,
                    columns: [
                        {
                            $id: Now.ID['x_2207143_k_test_home_col_timeline'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_2207143_k_test_home_instance_timeline'],
                                    widget: timelineWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
