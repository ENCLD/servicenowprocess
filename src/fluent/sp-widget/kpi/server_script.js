(function () {
    data.endingSoon = 0;
    data.activeContracts = 0;
    data.placesAllocated = 0;

    var ACTIVE = 'active=true';
    var ENDING_SOON = 'active=true^end_dateBETWEENjavascript:gs.beginningOfToday()@javascript:gs.daysAgoEnd(-30)';

    // Contracts ending within the next 30 days
    var gaEnding = new GlideAggregate('x_2207143_k_test_assignment');
    gaEnding.addEncodedQuery(ENDING_SOON);
    gaEnding.addAggregate('COUNT');
    gaEnding.query();
    if (gaEnding.next()) {
        data.endingSoon = parseInt(gaEnding.getAggregate('COUNT'), 10) || 0;
    }

    // Active contracts = distinct client companies with at least one active assignment
    var gaCompanies = new GlideAggregate('x_2207143_k_test_assignment');
    gaCompanies.addEncodedQuery(ACTIVE);
    gaCompanies.groupBy('company');
    gaCompanies.query();
    var companyCount = 0;
    while (gaCompanies.next()) {
        companyCount++;
    }
    data.activeContracts = companyCount;

    // Places allocated = total active assignment rows (one row = one consultant
    // placed at one company)
    var gaPlaces = new GlideAggregate('x_2207143_k_test_assignment');
    gaPlaces.addEncodedQuery(ACTIVE);
    gaPlaces.addAggregate('COUNT');
    gaPlaces.query();
    if (gaPlaces.next()) {
        data.placesAllocated = parseInt(gaPlaces.getAggregate('COUNT'), 10) || 0;
    }
})();
