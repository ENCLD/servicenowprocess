import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const kpiWidget = SPWidget({
    $id: Now.ID['x_2207143_k_test_kpi_widget'],
    id: 'x_2207143_k_test_kpi_widget',
    name: 'Resource Allocation KPIs',
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss: Now.include('./styles.css'),
})
