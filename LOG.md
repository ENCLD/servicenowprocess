# Logg – wf-b-run1

| | |
|---|---|
| **Variant** | B – Plan → bygg |
| **Kjøring** | 1 |
| **SPEC-versjon** | 1.2 (egne UI Builder-komponenter i stedet for Service Portal) |
| **Scope** | Data og logikk: `x_2207143_ra_b1`. Komponenter: `x_2207143_ra_b1k`. (SPEC: `x_kpmg_ra_b1`, se Avvik) |
| **Branch** | `wf-b-run1` |
| **Dato** | 2026-09-23 |

## Definition of Done

- [x] `now-sdk build` kjører uten feil
- [x] `now-sdk install` kjører uten feil på PDI (dev440578, 2026-09-23)
- [x] Komponentene bygges uten feil (`now-cli generate-update-set`)
- [ ] Oppdateringssettet med komponentene er importert og committet på PDI
- [ ] K1–K10 er verifisert manuelt på PDI og krysset av nedenfor
- [x] Kodekvalitet (SPEC seksjon 2): ingen hardkodede sys_id-er i kilden, ingen GlideRecord i klientkode
- [x] Kjøringen er committet på egen branch: `wf-b-run1`

### Testet før installasjon

- **Beregningsreglene** (`src/server/regler.ts`, `src/server/oversikt-modell.ts`) er testet lokalt mot testdataene med dagens dato 2026-09-23. Tallene i «Forventet» kommer derfra.
- **Komponentene** er testet i Chrome headless med instansens egne UI Framework-filer og K10-data:
  - Alle sju tegnes med forventede tall.
  - Ugyldig prosent og tomt skjema avvises (K1).
  - Lagring i tidslinjen sender én PATCH, og alle sju komponentene henter data på nytt uten reload (K6).
  - Lagring mot det ekte API-et med innlogging er ikke testet.

## Oppbygging

- **SDK-appen `x_2207143_ra_b1`** (roten av repoet): tabellene Konsulent, Kunde og Allokering, forretningsreglene for K1 og K3, REST-API-et `/api/x_2207143_ra_b1/ra/oversikt` med beregningene fra seksjon 5, K10-testdata og en navigatormeny med listene.
- **Komponentprosjektet `x_2207143_ra_b1k`** (`komponenter/`): sju UI Builder-komponenter som henter data fra REST-API-et og lagrer via Table API. Se `komponenter/README.md`.

## Slik tar du det i bruk

1. **Importer komponentene:** System Update Sets → Retrieved Update Sets → **Import Update Set from XML** → velg `komponenter/oppdateringssett/ra-komponenter.xml`. Åpne «ra-komponenter» og velg **Preview Update Set**, deretter **Commit Update Set**.
2. **Lag en side i UI Builder** (Now Experience Framework → UI Builder):
   - Åpne en eksisterende opplevelse eller lag en ny, og legg til en side, for eksempel «Ressursallokering».
   - Søk på «Ressurs» i komponentpanelet (+ Add content) og dra inn komponentene i denne rekkefølgen: Overallokering, Nøkkeltall, Slutter snart, Tidslinje, Søylediagram, Fordeling og kapasitet, Ny allokering.
   - Lagre og velg **Open**.
3. **Test K1–K10** etter tabellen under. Du trenger rollen `itil`; admin har den automatisk.

## Manuell verifisering på PDI

Forventede verdier gjelder dagens dato 2026-09-23. Testdataene har faste datoer, så de endrer seg etter hvert som tiden går.

| ID | Slik tester du | Forventet | OK |
|---|---|---|---|
| K1 | «Ressurs – Ny allokering»: fyll alle felt og lagre. Prøv så prosent 0 og 101, og til-dato før fra-dato. Prøv det samme i det vanlige skjemaet (Navigator → Ressursallokering → Ny allokering). | Gyldig allokering lagres. Ugyldige avvises med melding, både i komponenten og i skjemaet. | [ ] |
| K2 | «Ressurs – Fordeling og kapasitet», venstre tabell. | Ahmed 100, Erik 70, Ingrid 100, Jonas 100, Lina 0, Maria 120, Sofie 40, Thomas 60 (%). | [ ] |
| K3 | «Ressurs – Overallokering». Lagre så en allokering for Maria i det vanlige skjemaet. | Rød advarsel: Maria 120 % 2026-09-01 – 2026-12-31. Periodene er rødt merket i tidslinjen. Skjemaet viser en advarsel, men lagrer. | [ ] |
| K4 | «Ressurs – Søylediagram». | En søyle per konsulent med stiplet 100 %-linje. Maria over linjen (rød). | [ ] |
| K5 | «Ressurs – Tidslinje». | 8 rader, allokeringene som perioder langs månedsaksen, linje for i dag. Lina: «Ingen oppdrag». | [ ] |
| K6 | Klikk en periode i tidslinjen, endre til-dato eller prosent, og trykk Lagre. | Endringen lagres. K2, K4 og K7 oppdateres uten å laste siden på nytt. | [ ] |
| K7 | «Ressurs – Nøkkeltall». | Aktive kontrakter 10 · Allokerte plasser 10 · Slutter innen 30 dager 3. | [ ] |
| K8 | «Ressurs – Slutter snart». | Jonas Berg (Nordlys Energi, 2026-10-09), Ingrid Haugen (Havbruk Solutions, 2026-10-15), Sofie Lunde (Havbruk Solutions, 2026-10-20). | [ ] |
| K9 | «Ressurs – Fordeling og kapasitet», høyre tabell. | Jonas 100, Lina 100, Sofie 100, Ingrid 50, Thomas 40, Erik 30 (% ledig). | [ ] |
| K10 | Navigator → Ressursallokering → Konsulenter / Kunder / Allokeringer. | 8 konsulenter, 4 kunder, 16 allokeringer. Maria overallokert, 3 slutter innen 30 dager, Lina uten oppdrag. | [ ] |

## Tolkninger (godkjent i planen)

- **K3 – overallokering:** den høyeste summen på én enkelt dag, blant allokeringer som overlapper etter definisjonen i seksjon 5. Det gjelder alle perioder, også historiske. Nøyaktig 100 % er ikke overallokering.
- **K9 – trenger oppdrag:** den daglige summen regnes for hver dag fra i dag til og med i dag + 30. Konsulenten vises hvis minst én dag er under 100 %. Ledig kapasitet = 100 − laveste daglige sum.
- **K7 – aktive kontrakter og allokerte plasser** er like per definisjon i seksjon 5 («én allokering = én plass»).
- **Aktiv konsulent:** bare konsulenter med `aktiv = true` vises i K2, K4, K5 og K9.

## Avvik og merknader

- **SPEC 1.0 → 1.1 → 1.2:** Brukergrensesnittet ble først en React UI Page og deretter egne UI Builder-komponenter, etter beslutninger underveis.
- **Komponenter kan ikke lages med `now-sdk`:** Hverken 4.11 eller 4.12.2 har API for UI Builder-komponenter. Komponentene er bygget med `now-cli` (`@servicenow/cli` 29.0.2), ServiceNows verktøy for Next Experience-komponenter.
- **Erstatning for `snc`:** `now-cli` krever ServiceNow CLI (`snc`), som ikke var tilgjengelig. Den brukes bare til å lese versjonsnummeret, så `komponenter/verktoy/snc` svarer med et versjonsnummer i stedet. Bygging skjer med `--offline`, og installasjon skjer ved import av oppdateringssettet. Passord trengs ikke.
- **To scope:** Komponentene ligger i `x_2207143_ra_b1k` og data/logikk i `x_2207143_ra_b1`. Grunnen er at `now-sdk install` installerer hele SDK-appen på nytt og kunne ha fjernet komponenter i samme scope.
- **Siden settes sammen i UI Builder:** Verken `now-sdk` eller `now-cli` kan plassere egne komponenter på en UI Builder-side, så det gjøres for hånd (se «Slik tar du det i bruk»).
- **Scope-prefiks:** SPEC ber om `x_kpmg_ra_b1`, men PDI-en avviste installasjonen («Unable to install application as application was null») fordi `x_kpmg` ikke er instansens leverandørprefiks. Kjøringen bruker derfor PDI-ens prefiks, `x_2207143_`, som avtalt i planen.
- **Importer mellom servermoduler** må ha `.ts`-endelse (`./regler.ts`). Uten den fant ikke instansen modulene (`ModuleResolutionException`).
- **React-siden er fjernet:** `x_2207143_ra_b1_ressurs.do` fra SPEC 1.1 er slettet fra appen. Den gamle klientpakken ble fortsatt servert fra `/uxasset` rett etter installasjonen, trolig fra hurtigbuffer.
- **Testdata** installeres ved hver `now-sdk install` og overskriver endringer i de 28 testpostene.
