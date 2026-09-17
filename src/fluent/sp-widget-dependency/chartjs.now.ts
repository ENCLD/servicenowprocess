import '@servicenow/sdk/global'
import { SPWidgetDependency, JsInclude } from '@servicenow/sdk/core'

export const chartJsDependency = SPWidgetDependency({
    $id: Now.ID['x_2207143_k_test_chartjs_dep'],
    name: 'x_2207143_k_test_chartjs',
    jsIncludes: [
        {
            order: 100,
            include: JsInclude({
                $id: Now.ID['x_2207143_k_test_chartjs_js'],
                name: 'Chart.js 4.4.0',
                url: 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
            }),
        },
    ],
    includeOnPageLoad: false,
    portalsForPageLoad: [],
})
