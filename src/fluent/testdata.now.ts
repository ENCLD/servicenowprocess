import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// K10: 8 konsulenter, 4 kunder, 16 allokeringer. Datoene er satt rundt 2026-09-23:
// - Maria Solberg er overallokert (60 % + 60 % overlapper sep–des 2026)
// - Jonas Berg, Ingrid Haugen og Sofie Lunde har oppdrag som slutter innen 30 dager
// - Lina Bakke har ingen oppdrag
// Datoene er faste, så "slutter innen 30 dager"-tilfellene gjelder bare rundt oktober 2026.

const maria = Record({
    $id: Now.ID['konsulent-maria'],
    table: 'x_2207143_ra_b1_konsulent',
    data: { navn: 'Maria Solberg', tittel: 'Senior Manager', aktiv: true },
})

const jonas = Record({
    $id: Now.ID['konsulent-jonas'],
    table: 'x_2207143_ra_b1_konsulent',
    data: { navn: 'Jonas Berg', tittel: 'Konsulent', aktiv: true },
})

const ingrid = Record({
    $id: Now.ID['konsulent-ingrid'],
    table: 'x_2207143_ra_b1_konsulent',
    data: { navn: 'Ingrid Haugen', tittel: 'Manager', aktiv: true },
})

const ahmed = Record({
    $id: Now.ID['konsulent-ahmed'],
    table: 'x_2207143_ra_b1_konsulent',
    data: { navn: 'Ahmed Khalil', tittel: 'Seniorkonsulent', aktiv: true },
})

const sofie = Record({
    $id: Now.ID['konsulent-sofie'],
    table: 'x_2207143_ra_b1_konsulent',
    data: { navn: 'Sofie Lunde', tittel: 'Konsulent', aktiv: true },
})

const erik = Record({
    $id: Now.ID['konsulent-erik'],
    table: 'x_2207143_ra_b1_konsulent',
    data: { navn: 'Erik Nilsen', tittel: 'Seniorkonsulent', aktiv: true },
})

Record({
    $id: Now.ID['konsulent-lina'],
    table: 'x_2207143_ra_b1_konsulent',
    data: { navn: 'Lina Bakke', tittel: 'Analytiker', aktiv: true },
})

const thomas = Record({
    $id: Now.ID['konsulent-thomas'],
    table: 'x_2207143_ra_b1_konsulent',
    data: { navn: 'Thomas Vik', tittel: 'Direktør', aktiv: true },
})

const nordlys = Record({
    $id: Now.ID['kunde-nordlys'],
    table: 'x_2207143_ra_b1_kunde',
    data: { bedriftsnavn: 'Nordlys Energi' },
})

const fjordbank = Record({
    $id: Now.ID['kunde-fjordbank'],
    table: 'x_2207143_ra_b1_kunde',
    data: { bedriftsnavn: 'Fjordbank' },
})

const havbruk = Record({
    $id: Now.ID['kunde-havbruk'],
    table: 'x_2207143_ra_b1_kunde',
    data: { bedriftsnavn: 'Havbruk Solutions' },
})

const tindra = Record({
    $id: Now.ID['kunde-tindra'],
    table: 'x_2207143_ra_b1_kunde',
    data: { bedriftsnavn: 'Tindra Retail' },
})

Record({
    $id: Now.ID['allokering-01'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: maria, kunde: fjordbank, fra_dato: '2026-06-01', til_dato: '2026-12-31', prosent: 60 },
})

Record({
    $id: Now.ID['allokering-02'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: maria, kunde: nordlys, fra_dato: '2026-09-01', til_dato: '2027-02-28', prosent: 60 },
})

Record({
    $id: Now.ID['allokering-03'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: jonas, kunde: nordlys, fra_dato: '2026-04-01', til_dato: '2026-10-09', prosent: 100 },
})

Record({
    $id: Now.ID['allokering-04'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: jonas, kunde: tindra, fra_dato: '2026-10-12', til_dato: '2027-03-31', prosent: 80 },
})

Record({
    $id: Now.ID['allokering-05'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: ingrid, kunde: havbruk, fra_dato: '2026-01-15', til_dato: '2026-10-15', prosent: 50 },
})

Record({
    $id: Now.ID['allokering-06'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: ingrid, kunde: fjordbank, fra_dato: '2026-08-01', til_dato: '2027-01-31', prosent: 50 },
})

Record({
    $id: Now.ID['allokering-07'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: ingrid, kunde: tindra, fra_dato: '2026-11-01', til_dato: '2027-03-31', prosent: 30 },
})

Record({
    $id: Now.ID['allokering-08'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: ahmed, kunde: havbruk, fra_dato: '2025-10-01', til_dato: '2026-06-30', prosent: 100 },
})

Record({
    $id: Now.ID['allokering-09'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: ahmed, kunde: tindra, fra_dato: '2026-07-01', til_dato: '2027-06-30', prosent: 100 },
})

Record({
    $id: Now.ID['allokering-10'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: sofie, kunde: havbruk, fra_dato: '2026-09-01', til_dato: '2026-10-20', prosent: 40 },
})

Record({
    $id: Now.ID['allokering-11'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: sofie, kunde: nordlys, fra_dato: '2026-11-01', til_dato: '2027-04-30', prosent: 100 },
})

Record({
    $id: Now.ID['allokering-12'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: erik, kunde: fjordbank, fra_dato: '2026-03-01', til_dato: '2026-12-15', prosent: 70 },
})

Record({
    $id: Now.ID['allokering-13'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: erik, kunde: havbruk, fra_dato: '2027-01-04', til_dato: '2027-06-30', prosent: 100 },
})

Record({
    $id: Now.ID['allokering-14'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: thomas, kunde: nordlys, fra_dato: '2026-01-01', til_dato: '2026-12-31', prosent: 30 },
})

Record({
    $id: Now.ID['allokering-15'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: thomas, kunde: fjordbank, fra_dato: '2026-05-01', til_dato: '2027-04-30', prosent: 30 },
})

Record({
    $id: Now.ID['allokering-16'],
    table: 'x_2207143_ra_b1_allokering',
    data: { konsulent: thomas, kunde: tindra, fra_dato: '2026-02-01', til_dato: '2026-08-31', prosent: 40 },
})
