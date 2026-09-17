import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const timelineWidget = SPWidget({
    $id: Now.ID['x_2207143_k_test_timeline_widget'],
    id: 'x_2207143_k_test_timeline_widget',
    name: 'Resource Allocation Timeline',
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss: Now.include('./styles.css'),
})
