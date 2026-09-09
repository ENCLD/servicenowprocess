import { GlideRecord } from '@servicenow/glide'

export function setAssignmentEndMonth(current: GlideRecord<'x_2207143_k_test_assignment'>) {
    const endDate = current.getValue('end_date')
    if (endDate) {
        current.setValue('end_month', endDate.substring(0, 7))
    }
}
