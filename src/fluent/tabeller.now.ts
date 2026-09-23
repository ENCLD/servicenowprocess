import '@servicenow/sdk/global'
import { Table, StringColumn, BooleanColumn, ReferenceColumn, DateColumn, IntegerColumn } from '@servicenow/sdk/core'

// SPEC seksjon 3. Tilgang følger seksjon 6: kun standard itil/admin, ingen egne roller.

export const x_2207143_ra_b1_konsulent = Table({
    name: 'x_2207143_ra_b1_konsulent',
    label: 'Konsulent',
    display: 'navn',
    allowWebServiceAccess: true,
    audit: true,
    createAccessControls: true,
    userRole: 'itil',
    schema: {
        navn: StringColumn({ label: 'Navn', mandatory: true, maxLength: 100 }),
        tittel: StringColumn({ label: 'Tittel', maxLength: 100 }),
        aktiv: BooleanColumn({ label: 'Aktiv', default: true }),
    },
})

export const x_2207143_ra_b1_kunde = Table({
    name: 'x_2207143_ra_b1_kunde',
    label: 'Kunde',
    display: 'bedriftsnavn',
    allowWebServiceAccess: true,
    audit: true,
    createAccessControls: true,
    userRole: 'itil',
    schema: {
        bedriftsnavn: StringColumn({ label: 'Bedriftsnavn', mandatory: true, maxLength: 100 }),
    },
})

// "Aktiv" lagres ikke på allokeringen: den er aktiv når fra_dato ≤ i dag ≤ til_dato
// (SPEC seksjon 5), og beregnes i src/server/regler.ts.
export const x_2207143_ra_b1_allokering = Table({
    name: 'x_2207143_ra_b1_allokering',
    label: 'Allokering',
    display: 'konsulent',
    allowWebServiceAccess: true,
    audit: true,
    createAccessControls: true,
    userRole: 'itil',
    schema: {
        konsulent: ReferenceColumn({
            label: 'Konsulent',
            referenceTable: 'x_2207143_ra_b1_konsulent',
            mandatory: true,
        }),
        kunde: ReferenceColumn({
            label: 'Kunde',
            referenceTable: 'x_2207143_ra_b1_kunde',
            mandatory: true,
        }),
        fra_dato: DateColumn({ label: 'Fra-dato', mandatory: true }),
        til_dato: DateColumn({ label: 'Til-dato', mandatory: true }),
        prosent: IntegerColumn({ label: 'Prosent', mandatory: true, min: 1, max: 100, default: '100' }),
    },
})
