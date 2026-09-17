api.controller = function ($rootScope, $element, $timeout) {
    var c = this;

    var DAY_MS = 24 * 60 * 60 * 1000;
    var PADDING_DAYS = 14;
    var MIN_DURATION_DAYS = 1;
    // Pixels allotted per day of range. At this scale a typical widget width
    // (~900px) shows roughly a year at a time before the user needs to scroll,
    // and month labels always get enough room to avoid overlapping regardless
    // of how many months the full data range spans.
    var PX_PER_DAY = 2.5;
    var MIN_TIMELINE_WIDTH = 600;

    c.bars = [];
    c.dirty = {}; // sys_id -> { start_date, end_date }
    c.saving = false;
    c.message = '';
    c.messageType = '';
    c.rangeStart = null;
    c.rangeEnd = null;
    c.totalDays = 0;
    c.timelineWidthPx = MIN_TIMELINE_WIDTH;
    c.monthMarkers = [];

    function parseDate(str) {
        var parts = str.split('-');
        return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    }

    function formatDate(date) {
        var y = date.getFullYear();
        var m = ('0' + (date.getMonth() + 1)).slice(-2);
        var d = ('0' + date.getDate()).slice(-2);
        return y + '-' + m + '-' + d;
    }

    function addDays(date, days) {
        var result = new Date(date.getTime());
        result.setDate(result.getDate() + days);
        return result;
    }

    function buildMonthMarkers(start, end) {
        var markers = [];
        var totalRangeDays = Math.max(Math.round((end - start) / DAY_MS), 1);
        var cursor = new Date(start.getFullYear(), start.getMonth(), 1);
        while (cursor <= end) {
            if (cursor >= start) {
                var offsetDays = Math.round((cursor - start) / DAY_MS);
                markers.push({
                    label: cursor.toLocaleString('default', { month: 'short', year: 'numeric' }),
                    leftPct: (offsetDays / totalRangeDays) * 100,
                });
            }
            cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
        }
        return markers;
    }

    function buildBars() {
        var rows = c.data.rows || [];
        if (!rows.length) {
            c.bars = [];
            return;
        }

        var minStart = null;
        var maxEnd = null;
        rows.forEach(function (row) {
            var s = parseDate(row.startDate);
            var e = parseDate(row.endDate);
            if (!minStart || s < minStart) {
                minStart = s;
            }
            if (!maxEnd || e > maxEnd) {
                maxEnd = e;
            }
        });

        c.rangeStart = addDays(minStart, -PADDING_DAYS);
        c.rangeEnd = addDays(maxEnd, PADDING_DAYS);
        c.totalDays = Math.max(Math.round((c.rangeEnd - c.rangeStart) / DAY_MS), 1);
        c.timelineWidthPx = Math.max(c.totalDays * PX_PER_DAY, MIN_TIMELINE_WIDTH);
        c.monthMarkers = buildMonthMarkers(c.rangeStart, c.rangeEnd);

        c.bars = rows.map(function (row) {
            var pending = c.dirty[row.sys_id];
            var startStr = pending ? pending.start_date : row.startDate;
            var endStr = pending ? pending.end_date : row.endDate;
            var start = parseDate(startStr);
            var end = parseDate(endStr);
            return {
                sys_id: row.sys_id,
                consultant: row.consultant,
                consultantTitle: row.consultantTitle,
                company: row.company,
                allocation: row.allocation,
                active: row.active,
                startDate: startStr,
                endDate: endStr,
                leftPct: ((start - c.rangeStart) / DAY_MS / c.totalDays) * 100,
                widthPct: Math.max((((end - start) / DAY_MS + 1) / c.totalDays) * 100, 0.5),
                dirty: !!pending,
            };
        });
    }

    buildBars();

    // --- Drag / resize interactions ---
    var dragState = null;

    c.startDrag = function (event, bar, mode) {
        event.preventDefault();
        var track = $element[0].querySelector('.ra-timeline-track');
        if (!track) {
            return;
        }
        var trackWidth = track.getBoundingClientRect().width;

        dragState = {
            bar: bar,
            mode: mode, // 'move' | 'resize-start' | 'resize-end'
            startX: event.clientX,
            pxPerDay: trackWidth / c.totalDays,
            originalStart: parseDate(bar.startDate),
            originalEnd: parseDate(bar.endDate),
        };

        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', onDragEnd);
    };

    function onDragMove(event) {
        if (!dragState) {
            return;
        }
        var deltaPx = event.clientX - dragState.startX;
        var deltaDays = Math.round(deltaPx / dragState.pxPerDay);
        var bar = dragState.bar;
        var newStart = dragState.originalStart;
        var newEnd = dragState.originalEnd;

        if (dragState.mode === 'move') {
            newStart = addDays(dragState.originalStart, deltaDays);
            newEnd = addDays(dragState.originalEnd, deltaDays);
        } else if (dragState.mode === 'resize-start') {
            newStart = addDays(dragState.originalStart, deltaDays);
            var latestAllowedStart = addDays(dragState.originalEnd, -(MIN_DURATION_DAYS - 1));
            if (newStart > latestAllowedStart) {
                newStart = latestAllowedStart;
            }
        } else if (dragState.mode === 'resize-end') {
            newEnd = addDays(dragState.originalEnd, deltaDays);
            var earliestAllowedEnd = addDays(dragState.originalStart, MIN_DURATION_DAYS - 1);
            if (newEnd < earliestAllowedEnd) {
                newEnd = earliestAllowedEnd;
            }
        }

        $timeout(function () {
            bar.startDate = formatDate(newStart);
            bar.endDate = formatDate(newEnd);
            bar.leftPct = ((newStart - c.rangeStart) / DAY_MS / c.totalDays) * 100;
            bar.widthPct = Math.max((((newEnd - newStart) / DAY_MS + 1) / c.totalDays) * 100, 0.5);
        });
    }

    function onDragEnd() {
        if (!dragState) {
            return;
        }
        var bar = dragState.bar;
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);

        $timeout(function () {
            c.dirty[bar.sys_id] = { start_date: bar.startDate, end_date: bar.endDate };
            bar.dirty = true;
        });

        dragState = null;
    }

    c.hasChanges = function () {
        return Object.keys(c.dirty).length > 0;
    };

    c.dirtyCount = function () {
        return Object.keys(c.dirty).length;
    };

    c.discardChanges = function () {
        c.dirty = {};
        c.message = '';
        c.server.refresh().then(buildBars);
    };

    c.saveChanges = function () {
        var changes = Object.keys(c.dirty).map(function (sysId) {
            return {
                sys_id: sysId,
                start_date: c.dirty[sysId].start_date,
                end_date: c.dirty[sysId].end_date,
            };
        });
        if (!changes.length) {
            return;
        }

        c.saving = true;
        c.data.action = 'save_changes';
        c.data.changes = changes;

        c.server.update().then(function () {
            c.saving = false;
            c.data.action = null;
            c.data.changes = null;
            var result = c.data.saveResult;
            if (result && result.errors && result.errors.length) {
                c.message = 'Some changes could not be saved: ' + result.errors.join('; ');
                c.messageType = 'danger';
            } else {
                c.message = 'Timeline updated — ' + (result ? result.updated : changes.length) + ' assignment(s) saved.';
                c.messageType = 'success';
                // Tell the KPI tiles and overview chart to refresh from the tables
                // this button just changed.
                $rootScope.$broadcast('x_2207143_k_test:assignmentsUpdated');
            }
            c.dirty = {};
            buildBars();
        });
    };

    // --- Add Assignment ---
    var DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

    c.showAddForm = false;
    c.creating = false;
    c.createErrors = [];
    c.newAssignment = {};

    function resetNewAssignmentForm() {
        c.newAssignment = {
            consultant: '',
            company: '',
            start_date: '',
            end_date: '',
            allocation_percentage: 100,
        };
        c.createErrors = [];
    }
    resetNewAssignmentForm();

    c.toggleAddForm = function () {
        c.showAddForm = !c.showAddForm;
        if (c.showAddForm) {
            resetNewAssignmentForm();
        }
    };

    function validateNewAssignment(form) {
        var errors = [];
        if (!form.consultant) {
            errors.push('Choose a consultant.');
        }
        if (!form.company) {
            errors.push('Choose a client company.');
        }
        if (!DATE_PATTERN.test(form.start_date || '')) {
            errors.push('Start date must be in YYYY-MM-DD format.');
        }
        if (!DATE_PATTERN.test(form.end_date || '')) {
            errors.push('End date must be in YYYY-MM-DD format.');
        }
        if (
            DATE_PATTERN.test(form.start_date || '') &&
            DATE_PATTERN.test(form.end_date || '') &&
            form.end_date < form.start_date
        ) {
            errors.push('End date must be on or after the start date.');
        }
        var allocation = parseInt(form.allocation_percentage, 10);
        if (!allocation || allocation < 1 || allocation > 100) {
            errors.push('Allocation % must be between 1 and 100.');
        }
        return errors;
    }

    c.submitNewAssignment = function () {
        var errors = validateNewAssignment(c.newAssignment);
        if (errors.length) {
            c.createErrors = errors;
            return;
        }

        c.creating = true;
        c.createErrors = [];
        c.data.action = 'create_assignment';
        c.data.consultant = c.newAssignment.consultant;
        c.data.company = c.newAssignment.company;
        c.data.start_date = c.newAssignment.start_date;
        c.data.end_date = c.newAssignment.end_date;
        c.data.allocation_percentage = c.newAssignment.allocation_percentage;

        c.server.update().then(function () {
            c.creating = false;
            c.data.action = null;
            var result = c.data.createResult;
            if (result && result.success) {
                c.showAddForm = false;
                c.message = 'New assignment added to the timeline.';
                c.messageType = 'success';
                // A newly added assignment changes the tables the KPI tiles and
                // overview chart read from too.
                $rootScope.$broadcast('x_2207143_k_test:assignmentsUpdated');
                buildBars();
            } else if (result && result.errors) {
                c.createErrors = result.errors;
            }
        });
    };

    c.$onDestroy = function () {
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);
    };
};
