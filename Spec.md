# SPEC – Ressursallokering (ServiceNow)

> Fast kravspesifikasjon for arbeidsflyt-eksperimentet. **Samme versjon brukes i alle kjøringer.**
> Endres den, bump versjonen og start målingene på nytt.

**Versjon:** 1.0
**Basert på:** Einars Prompt 1, Test 2 (`prompting/README.md`)

---

## 1. Formål

En konsulentbedrift skal kunne se hvordan ansatte er fordelt på kundeoppdrag, hvem som snart trenger nytt oppdrag, og hvem som er overallokert. Løsningen skal erstatte dagens Excel-oversikt.

## 2. Tekniske rammer

- Scoped app bygget med **ServiceNow SDK** (`now-sdk build` / `now-sdk install`)
- Scope: `x_kpmg_ra_<variant><kjøring>` (f.eks. `x_kpmg_ra_b1`), **ny scope per kjøring**
- Brukergrensesnitt: **Service Portal**
- Ingen hardkodede sys_id-er, og ingen GlideRecord i client scripts

## 3. Datamodell

| Tabell | Felt |
|---|---|
| **Konsulent** | navn, tittel, aktiv (true/false) |
| **Kunde** | bedriftsnavn |
| **Allokering** | konsulent (ref), kunde (ref), fra-dato, til-dato, prosent (1–100) |

## 4. Funksjonelle krav og akseptkriterier

| ID | Krav | Akseptkriterium (testbart) |
|---|---|---|
| K1 | Registrere allokering | En allokering kan opprettes med alle felt fra seksjon 3. Prosent utenfor 1–100 avvises. Til-dato før fra-dato avvises. |
| K2 | Total fordeling per konsulent | Summen av prosent for konsulentens allokeringer som er aktive i dag vises per konsulent. |
| K3 | Varsel ved overallokering | Hvis summen for en konsulent overstiger 100 % i en overlappende periode, vises en tydelig advarsel i skjema/portal. Lagring er fortsatt lov. |
| K4 | Søylediagram | Viser total allokering (%) per konsulent i dag. En 100 %-linje eller markering vises. |
| K5 | Tidslinje | Viser hver konsulent som en rad, med allokeringene som perioder langs en tidsakse. |
| K6 | Redigerbar tidslinje | Fra-dato, til-dato og prosent kan endres direkte i tidslinjevisningen. Endringen lagres og oppdaterer K2, K4 og K7 uten manuell reload. |
| K7 | Nøkkeltall over tidslinjen | Tre tall: **Aktive kontrakter**, **Allokerte plasser**, **Slutter innen 30 dager** (definert i seksjon 5). |
| K8 | Liste over oppdrag som slutter | Under nøkkeltallene vises konsulent, kunde og til-dato for oppdrag som slutter innen 30 dager, sortert etter nærmeste dato. |
| K9 | Hvem trenger oppdrag | En liste over konsulenter som har under 100 % allokering de neste 30 dagene, med ledig kapasitet i %. |
| K10 | Testdata | Minst 8 konsulenter, 4 kunder og 15 allokeringer. Minst 1 overallokert konsulent, 2 oppdrag som slutter innen 30 dager og 1 konsulent uten oppdrag. |

## 5. Definisjoner

Disse definisjonene brukes for å unngå tolkningsforskjeller mellom kjøringene.

- **Aktiv kontrakt:** en allokering der fra-dato ≤ i dag ≤ til-dato
- **Allokerte plasser:** antall aktive kontrakter (én allokering = én plass)
- **Slutter innen 30 dager:** aktiv kontrakt der til-dato ≤ i dag + 30 dager
- **Overlappende periode:** to allokeringer overlapper hvis A.fra ≤ B.til og B.fra ≤ A.til

## 6. Utenfor scope

- Integrasjon mot HR- eller timesystem
- Import fra Excel
- E-postvarsler (kun varsler i løsningen)
- Rollebasert tilgangsstyring utover standard admin/itil

## 7. Definition of Done

- [ ] `now-sdk build` kjører uten feil
- [ ] `now-sdk install` kjører uten feil på PDI
- [ ] K1–K10 er verifisert manuelt på PDI og krysset av i loggen
- [ ] Kodekvalitets-sjekklisten er gått gjennom (seksjon 2)
- [ ] Kjøringen er committet på egen branch: `wf-<variant>-run<n>`

## 8. Fast startprompt (alle varianter)

> Les SPEC.md og bygg appen som beskrevet. Følg de tekniske rammene i seksjon 2 og definisjonene i seksjon 5.

Variantene skiller seg bare i hvordan arbeidet styres etter denne prompten, ikke i hva som bes om:

- **A:** One-shot
- **B:** Plan → bygg
- **C:** Små steg
- **D:** Test først
