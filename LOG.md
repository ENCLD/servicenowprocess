# Logg – wf-b-run1

| | |
|---|---|
| **Variant** | B – Plan → bygg |
| **Kjøring** | 1 |
| **SPEC-versjon** | 1.1 (UI Page med `@servicenow/react-components` i stedet for Service Portal) |
| **Scope** | `x_2207143_ra_b1` (SPEC: `x_kpmg_ra_b1`, se Avvik) |
| **Branch** | `wf-b-run1` |
| **Dato** | 2026-09-23 |

## Definition of Done

- [x] `now-sdk build` kjører uten feil
- [x] `now-sdk install` kjører uten feil på PDI (dev440578, 2026-09-23)
- [ ] K1–K10 er verifisert manuelt på PDI og krysset av nedenfor
- [x] Kodekvalitet (SPEC seksjon 2): ingen hardkodede sys_id-er i kilden, ingen GlideRecord/GlideAjax/g_form i klientkoden
- [x] Kjøringen er committet på egen branch: `wf-b-run1`

Beregningsreglene (`src/server/regler.ts`, `src/server/oversikt-modell.ts`) er i tillegg testet lokalt mot testdataene med dagens dato satt til 2026-09-23. Tallene i «Forventet» under kommer derfra.

## Slik åpner du appen

Navigator → **Ressursallokering → Oversikt**, eller `https://<instans>/x_2207143_ra_b1_ressurs.do`.
Krever rollen `itil` (admin har den automatisk).

## Manuell verifisering på PDI

Forventede verdier gjelder dagens dato 2026-09-23. Testdataene har faste datoer, så de endrer seg etter hvert som tiden går.

| ID | Slik tester du | Forventet | OK |
|---|---|---|---|
| K1 | «Ny allokering»: fyll alle felt og lagre. Prøv så prosent 0 og 101, og til-dato før fra-dato. Prøv det samme i det vanlige skjemaet (Navigator → Ny allokering). | Gyldig allokering lagres. Ugyldige avvises med melding, både på UI-siden og i skjemaet. | [ ] |
| K2 | «Total fordeling per konsulent». | Ahmed 100, Erik 70, Ingrid 100, Jonas 100, Lina 0, Maria 120, Sofie 40, Thomas 60 (%). | [ ] |
| K3 | Se toppen av siden og Marias rad. Lagre så en allokering for Maria i det vanlige skjemaet. | Rød advarsel: Maria 120 % 2026-09-01 – 2026-12-31. Periodene er rødt merket i tidslinjen. Skjemaet viser en advarsel, men lagrer. | [ ] |
| K4 | «Total allokering i dag». | En søyle per konsulent med stiplet 100 %-linje. Maria over linjen (rød). | [ ] |
| K5 | «Tidslinje». | 8 rader, allokeringene som perioder langs månedsaksen, linje for i dag. Lina: «Ingen oppdrag». | [ ] |
| K6 | Klikk en periode, endre til-dato eller prosent, og trykk Lagre. | Endringen lagres. K2, K4 og K7 oppdateres uten å laste siden på nytt. | [ ] |
| K7 | Kortene øverst. | Aktive kontrakter 10 · Allokerte plasser 10 · Slutter innen 30 dager 3. | [ ] |
| K8 | Listen under nøkkeltallene. | Jonas Berg (Nordlys Energi, 2026-10-09), Ingrid Haugen (Havbruk Solutions, 2026-10-15), Sofie Lunde (Havbruk Solutions, 2026-10-20). | [ ] |
| K9 | «Trenger oppdrag». | Jonas 100, Lina 100, Sofie 100, Ingrid 50, Thomas 40, Erik 30 (% ledig). | [ ] |
| K10 | Navigator → Konsulenter / Kunder / Allokeringer. | 8 konsulenter, 4 kunder, 16 allokeringer. Maria overallokert, 3 slutter innen 30 dager, Lina uten oppdrag. | [ ] |

## Tolkninger (godkjent i planen)

- **K3 – overallokering:** den høyeste summen på én enkelt dag, blant allokeringer som overlapper etter definisjonen i seksjon 5. Det gjelder alle perioder, også historiske. Nøyaktig 100 % er ikke overallokering.
- **K9 – trenger oppdrag:** den daglige summen regnes for hver dag fra i dag til og med i dag + 30. Konsulenten vises hvis minst én dag er under 100 %. Ledig kapasitet = 100 − laveste daglige sum.
- **K7 – aktive kontrakter og allokerte plasser** er like per definisjon i seksjon 5 («én allokering = én plass»).
- **Aktiv konsulent:** bare konsulenter med `aktiv = true` vises i K2, K4, K5 og K9.

## Avvik og merknader

- **SPEC 1.0 → 1.1:** Brukergrensesnittet er en React UI Page i stedet for Service Portal, etter beslutning før kjøringen.
- **Egne felt i tidslinjen og i «Ny allokering»:** Standard postskjema (`RecordProvider`) gir ikke beskjed når lagringen er ferdig, og kan derfor ikke oppdatere K2/K4/K7 automatisk (K6). Derfor bruker disse egne felt og Table API. Standardskjemaet brukes ved «Åpne skjema» og fra «Alle allokeringer».
- **K8 og K9 som enkle tabeller:** `NowRecordListConnected` kan ikke filtreres, og listene er beregnede verdier. Derfor bruker de enkle tabeller i stedet.
- **Diagram og tidslinje:** Komponentbiblioteket har ingen diagram- eller tidslinjekomponent, så begge er tegnet med egen SVG/CSS.
- **Testdata** installeres ved hver `now-sdk install` og overskriver endringer i de 28 testpostene.
- **Scope-prefiks:** SPEC ber om `x_kpmg_ra_b1`, men PDI-en avviste installasjonen («Unable to install application as application was null») fordi `x_kpmg` ikke er instansens leverandørprefiks. Kjøringen bruker derfor `x_2207143_ra_b1` (PDI-ens prefiks + `ra_b1`), som avtalt i planen.
