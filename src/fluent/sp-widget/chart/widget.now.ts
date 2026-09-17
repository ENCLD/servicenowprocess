import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'
import { chartJsDependency } from '../../sp-widget-dependency/chartjs.now'

export const chartWidget = SPWidget({
    $id: Now.ID['x_2207143_k_test_chart_widget'],
    id: 'x_2207143_k_test_chart_widget',
    name: 'Resource Allocation Overview Chart',
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss: Now.include('./styles.css'),
    dependencies: [chartJsDependency],
})
