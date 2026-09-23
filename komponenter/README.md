# Ressursallokering – UI Builder-komponenter

Sju Next Experience-komponenter for Ressursallokering (SPEC 1.2). De finnes i
UI Builder ved å søke på «Ressurs» i komponentpanelet.

| Komponent | Tagg | Krav |
|---|---|---|
| Ressurs – Tidslinje | `x-2207143-ra-tidslinje` | K5, K6 |
| Ressurs – Ny allokering | `x-2207143-ra-ny-allokering` | K1 |
| Ressurs – Nøkkeltall | `x-2207143-ra-nokkeltall` | K7 |
| Ressurs – Slutter snart | `x-2207143-ra-slutter-snart` | K8 |
| Ressurs – Søylediagram | `x-2207143-ra-soylediagram` | K4 |
| Ressurs – Fordeling og kapasitet | `x-2207143-ra-fordeling` | K2, K9 |
| Ressurs – Overallokering | `x-2207143-ra-overallokering` | K3 |

Komponentene henter data fra REST-API-et i appen `x_2207143_ra_b1` (tabeller,
forretningsregler og beregninger ligger i SDK-prosjektet i roten av repoet) og
lagrer via Table API. Etter lagring sender de `RA_ALLOKERING_LAGRET`, og alle
Ressurs-komponenter på siden henter data på nytt.

## Installere

Importer `oppdateringssett/ra-komponenter.xml` på instansen:

1. System Update Sets → Retrieved Update Sets → **Import Update Set from XML**
2. Åpne oppdateringssettet «ra-komponenter», velg **Preview Update Set**, og deretter **Commit Update Set**

SDK-appen `x_2207143_ra_b1` må være installert først (`npm run deploy` i roten).

## Bygge på nytt

Byggingen bruker `now-cli` (`npm install -g @servicenow/cli`). Den krever
egentlig ServiceNow CLI (`snc`), men bruker den bare til å lese versjonsnummeret.
`verktoy/snc(.cmd)` er en erstatning som svarer med et versjonsnummer.

```sh
npm install
PATH="$PWD/verktoy:$PATH" now-cli generate-update-set --offline \
  --loginHost https://example.invalid --username x --password x
cp .now-cli/*.xml oppdateringssett/ra-komponenter.xml
```

`--loginHost/--username/--password` er påkrevd av verktøyet, men brukes ikke med
`--offline`.
