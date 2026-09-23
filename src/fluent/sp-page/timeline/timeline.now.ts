import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { timelineWidget } from '../../sp-widget/timeline/widget.now'

export const timelinePage = SPPage({
    pageId: 'x_2207143_k_test_timeline',
    title: 'Timeline',
    public: false,
    draft: false,
    dynamicTitleStructure: 'Timeline - ${portal.title}',
    containers: [
        {
            $id: Now.ID['x_2207143_k_test_timeline_container_1'],
            name: 'Main Content',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_2207143_k_test_timeline_row_1'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_2207143_k_test_timeline_col_1'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_2207143_k_test_timeline_instance_1'],
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
