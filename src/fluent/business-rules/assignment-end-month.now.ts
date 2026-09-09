import { BusinessRule } from '@servicenow/sdk/core'
import { setAssignmentEndMonth } from '../../server/business-rules/set-assignment-end-month'

BusinessRule({
    $id: Now.ID['ra-br-end-month'],
    name: 'Set Assignment End Month',
    table: 'x_2207143_k_test_assignment',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    script: setAssignmentEndMonth,
})
