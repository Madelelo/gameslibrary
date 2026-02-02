# gameslibrary — Teknisk dokumentasjon ⚙️

## Systembeskrivelse 🧭

**gameslibrary** er et lite webbasert system som administrerer og viser en min samling brett- og videospill. Systemet består av en enkel REST API-backend som håndterer data i en MariaDB-database, og en frontend som henter og viser spillene. Formålet er å ha et system for å vise alle mine spill, og etter hvert kanskje lage et utlånssystem

---

## Teknisk beskrivelse 🔧

- **Backend**: Node.js (Express)
  - Viktige biblioteker: `express`, `cors`, `mariadb`
- **Database**: MariaDB
  - Database: `gameslibrary`
  - Tabell: `games` (kolonner: `id, name, releaseYear, gameType, gameCompany, gameConsole, maxPlayer, minPlayer`)
- **Frontend**: Vanilla HTML/JS

  **Teknologier & versjoner (anbefalt)**
  - Node.js: 14+ (helst 16/18)
  - MariaDB: 10.x eller nyere
  - NPM-pakker: `express`, `cors`, `mariadb` (se `backend/package.json`)

- **Hardware**: Kan kjøres lokalt på en vanlig utviklermaskin (macOS/Linux/Windows). Krever kun nok disk/minne til å kjøre Node og MariaDB.

---

## Oppsett og installasjon 🚀

Følgende beskriver steg for oppsett på en lokal maskin.

1. Klon repo og gå til backend:

```bash
git clone <repo-url>
cd gameslibrary/backend
```

2. Installer avhengigheter:

```bash
npm install
```

3. Start MariaDB og sørg for at du kan logge inn:

```bash
mariadb -u madde -p -h localhost
```

5. Initialiser databasen (kjør kun én gang eller når du vil resette testdata):

```bash
node dbinit.js
```

Dette lager tabellen `games` og fyller den med prøve-data.

6. Start serveren:

```bash
node app.js
# eller for utvikling:
# nodemon app.js
```

Serveren lytter som standard på `http://localhost:3000/`.

7. Åpne frontend: åpne `frontend/index.html` i nettleser.

---

## Endepunkter (API) 📡

- `GET /home` — helsesjekk
- `GET /games` — returnerer alle spill
- `GET /nameofgames` — returnerer kun navn
- `POST /newgame` — legg til nytt spill (JSON body)

Eksempel på POST-body:

```json
{
  "name": "Game Name",
  "releaseYear": 2024,
  "gameType": "Board Game",
  "gameCompany": "Example Co",
  "gameConsole": "Tabletop",
  "minPlayer": 1,
  "maxPlayer": 4
}
```

---

## Sikkerhet & kjente forbedringer ⚠️

- **Hardkodede DB-legitimasjoner** finnes i `dbconnector.js` — bytt til miljøvariabler og `.env` i stedet.
- **SQL-injection**: dagens POST-implementasjon bygger queryer ved å interpolere user-input. Bruk parameteriserte queries (f.eks. `connection.query(sql, params)`) for alle INSERT/UPDATE/DELETE.
- **Feil i frontend-endpoint-navn**: frontend sender til `newGame` (stor G) mens backend lytter på `/newgame` (liten g). Rett opp path i frontend (`fetch(API_URL + "newgame")`).
- **Graceful shutdown**: kall `await dbconnector.close()` ved SIGINT/SIGTERM for å lukke pool og la prosessen avslutte pent.

## Lisens & bidrag

Legg gjerne til en `LICENSE` (f.eks. MIT) og en `CONTRIBUTING.md` hvis du vil ha bidrag fra andre.

---

Skrevet med hjelp av Claude Sonnet 4.5 i februar 2026.
