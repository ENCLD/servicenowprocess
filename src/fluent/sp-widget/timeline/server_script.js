(function () {
    data.rows = [];
    data.consultantOptions = [];
    data.companyOptions = [];
    data.saveResult = null;
    data.createResult = null;

    var titleCache = {};

    function getConsultantTitle(sysId) {
        if (!sysId) {
            return '';
        }
        if (titleCache.hasOwnProperty(sysId)) {
            return titleCache[sysId];
        }
        var userGr = new GlideRecord('sys_user');
        var title = '';
        if (userGr.get(sysId)) {
            title = userGr.getValue('title') || '';
        }
        titleCache[sysId] = title;
        return title;
    }

    function loadRows() {
        var gr = new GlideRecord('x_2207143_k_test_assignment');
        gr.orderBy('start_date');
        gr.setLimit(200);
        gr.query();
        while (gr.next()) {
            data.rows.push({
                sys_id: gr.getUniqueValue(),
                consultant: gr.getDisplayValue('consultant'),
                consultantTitle: getConsultantTitle(gr.getValue('consultant')),
                company: gr.getDisplayValue('company'),
                startDate: gr.getValue('start_date'),
                endDate: gr.getValue('end_date'),
                allocation: parseInt(gr.getValue('allocation_percentage'), 10) || 0,
                active: gr.getValue('active') == 'true',
            });
        }
    }

    function loadOptions() {
        var userGr = new GlideRecord('sys_user');
        userGr.addQuery('active', true);
        userGr.orderBy('name');
        userGr.setLimit(300);
        userGr.query();
        while (userGr.next()) {
            var title = userGr.getValue('title');
            data.consultantOptions.push({
                sys_id: userGr.getUniqueValue(),
                label: userGr.getDisplayValue('name') + (title ? ' (' + title + ')' : ''),
            });
        }

        var companyGr = new GlideRecord('core_company');
        companyGr.addQuery('customer', true);
        companyGr.orderBy('name');
        companyGr.setLimit(300);
        companyGr.query();
        while (companyGr.next()) {
            data.companyOptions.push({
                sys_id: companyGr.getUniqueValue(),
                label: companyGr.getDisplayValue('name'),
            });
        }
    }

    function handleSave(changes) {
        var updated = 0;
        var errors = [];
        for (var i = 0; i < changes.length; i++) {
            var change = changes[i];
            var gr = new GlideRecord('x_2207143_k_test_assignment');
            if (!gr.get(change.sys_id)) {
                errors.push('Assignment not found: ' + change.sys_id);
                continue;
            }
            if (change.start_date) {
                gr.setValue('start_date', change.start_date);
            }
            if (change.end_date) {
                gr.setValue('end_date', change.end_date);
            }
            var ok = gr.update();
            if (ok) {
                updated++;
            } else {
                errors.push('Could not update assignment ' + change.sys_id);
            }
        }
        return { updated: updated, errors: errors };
    }

    function handleCreate(payload) {
        var errors = [];
        if (!payload.consultant) {
            errors.push('Consultant is required.');
        }
        if (!payload.company) {
            errors.push('Client company is required.');
        }
        if (!payload.start_date) {
            errors.push('Start date is required.');
        }
        if (!payload.end_date) {
            errors.push('End date is required.');
        }
        if (payload.start_date && payload.end_date && payload.end_date < payload.start_date) {
            errors.push('End date must be on or after the start date.');
        }
        var allocation = parseInt(payload.allocation_percentage, 10);
        if (!allocation || allocation < 1 || allocation > 100) {
            errors.push('Allocation % must be between 1 and 100.');
        }
        if (errors.length) {
            return { success: false, errors: errors };
        }

        var gr = new GlideRecord('x_2207143_k_test_assignment');
        gr.initialize();
        gr.setValue('consultant', payload.consultant);
        gr.setValue('company', payload.company);
        gr.setValue('start_date', payload.start_date);
        gr.setValue('end_date', payload.end_date);
        gr.setValue('allocation_percentage', allocation);
        gr.setValue('active', true);
        var sysId = gr.insert();
        if (!sysId) {
            return { success: false, errors: ['Insert failed. Check permissions.'] };
        }
        return { success: true, sys_id: sysId + '' };
    }

    if (input && input.action === 'save_changes' && input.changes) {
        data.saveResult = handleSave(input.changes);
    } else if (input && input.action === 'create_assignment') {
        data.createResult = handleCreate(input);
    }

    loadOptions();
    loadRows();
})();
