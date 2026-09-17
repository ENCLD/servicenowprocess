api.controller = function ($rootScope, $element, $timeout) {
    var c = this;
    var chartInstance = null;

    function renderChart() {
        $timeout(function () {
            var canvas = $element[0].querySelector('.ra-chart-canvas');
            if (!canvas || typeof Chart === 'undefined') {
                return;
            }
            if (chartInstance) {
                chartInstance.destroy();
            }
            chartInstance = new Chart(canvas.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: c.data.labels,
                    datasets: [
                        {
                            label: 'Total Allocation %',
                            data: c.data.values,
                            backgroundColor: c.data.colors,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: { display: true, text: 'Allocation %' },
                        },
                    },
                    plugins: {
                        legend: { display: false },
                    },
                },
            });
        }, 0);
    }

    renderChart();

    // Re-render whenever the timeline widget saves changes to assignments.
    var unbind = $rootScope.$on('x_2207143_k_test:assignmentsUpdated', function () {
        c.server.refresh().then(renderChart);
    });

    c.$onDestroy = function () {
        unbind();
        if (chartInstance) {
            chartInstance.destroy();
        }
    };
};
