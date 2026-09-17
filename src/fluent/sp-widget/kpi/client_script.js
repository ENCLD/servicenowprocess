api.controller = function ($rootScope) {
    var c = this;

    // Refresh KPI numbers whenever the timeline widget saves changes to
    // the underlying assignment records.
    var unbind = $rootScope.$on('x_2207143_k_test:assignmentsUpdated', function () {
        c.server.refresh();
    });

    c.$onDestroy = function () {
        unbind();
    };
};
