(function () {
    data.labels = [];
    data.values = [];
    data.colors = [];
    data.needsAttention = [];

    // Below this total allocation %, a consultant likely has room for more work.
    var UNDER_THRESHOLD = 80;

    var ga = new GlideAggregate('x_2207143_k_test_assignment');
    ga.addQuery('active', true);
    ga.addAggregate('SUM', 'allocation_percentage');
    ga.groupBy('consultant');
    ga.orderByAggregate('SUM', 'allocation_percentage');
    ga.query();

    while (ga.next()) {
        var total = parseInt(ga.getAggregate('SUM', 'allocation_percentage'), 10) || 0;
        var consultantName = ga.getDisplayValue('consultant');
        data.labels.push(consultantName);
        data.values.push(total);
        data.colors.push(total < UNDER_THRESHOLD ? '#E5A428' : '#0080A3');
        if (total < UNDER_THRESHOLD) {
            data.needsAttention.push({ name: consultantName, total: total });
        }
    }
})();
