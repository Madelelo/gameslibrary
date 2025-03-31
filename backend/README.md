# Spillbibliotek Backend

Dette er backend-applikasjonen for Madeleines spillbibliotek.

## Teknologier

- **Node.js**
- **Express.js**
- **MariaDB**

## Filer

- **app.js** - Filen som kjører Express-serveren
- **routes.js** - Filen med alle endepunktene
- **dbconnector.js** - Filen som kobler til databasen
- **dbinit.js** - Script som initialiserer databasen med data. Kjøres kun ved behov!

## API-endepunkter

Du finner kode for endepunktene i `routes.js`

**Hent alle spill:** `GET /games`

Eksempel på respons:

```sh
[
    ...
{    "id": 6,
    "name": "Hogwarts Legacy",
    "releaseYear": 2023,
    "gameType": "Video Game",
    "gameCompany": "Portkey Games",
    "gameConsole": "PlayStation 5, Xbox, PC",
    "maxPlayer": 1,
    "minPlayer": 1
  },
  { "id": 7,
    "name": "The Last of Us 1",
    "releaseYear": 2013,
    "gameType": "Video Game",
    "gameCompany": "Naughty Dog",
    "gameConsole": "PlayStation 3, PlayStation 4, PC",
    "maxPlayer": 1,
    "minPlayer": 1
  }
  ...
  ]
```

**Hent en liste med alle spillnavn:** `GET /nameofgames`

Eksempel på respons:

```sh
[
  {"name": "Ticket to Ride (original)"},
  {"name": "Arboretum board game"},
  { "name": "Legacy of Dragonholt" },
  ...
]
```

**Legg til spill:** `POST /newgame`

Eksempel på request (i terminalen):

```sh
curl -X POST http://localhost:3000/newgame \
     -H "Content-Type: application/json" \
     -d '{
           "name": "Scout!",
           "releaseYear": 2022,
           "gameCompany": "Oink Games",
           "gameType": "Cardbased boardgame",
           "gameConsole": ["Tabletop", "Travel"],
           "maxPlayer": 6,
           "minPlayer": 2
         }'
```

**KOMMER SNART - Hent ett spill:** `GET /api/games/:id`

**KOMMER SNART - Slett spill:** `DELETE /api/games/:id`

## Kjør dette prosjektet lokalt

1. **Klon repoet:**

   ```sh
   git clone https://github.com/Madelelo/gameslibrary.git
   cd gameslibrary/backend
   ```

2. **Installer avhengigheter:**

   ```sh
   npm install
   ```

3. **Sett opp MariaDB:**
   Hvis du ikke har lasta ned og satt opp MariaDB - sjekk ut denne linken.

   Logg inn med passord:

   ```sh
   mariadb -u root -p -h localhost
   ```

   Opprett `gameslibrary` databasen og bruk den:

   ```sh
   CREATE DATABASE gameslibrary;

   USE gameslibrary;
   ```

   Opprett tabellen `games` og legg inn data. Her kan du legge inn din egen data, eller bruke min ved å kjøre `dbinit.js`

   ```sh
   node dbinit.js
   ```

4. **Konfigurer database kobling:**
   Last ned pakken:
   `npm install mariadb`

   Lag filen db.connector. med flgende kode. Endre til dine passord.

   Inne i app.js legg til.  
   `const db = require("./dbconnector");`

Du kan nå koble til databasen med

5. **Start serveren:**
   ```sh
   nodemon app.js
   ```
   Serveren kjører nå på `http://localhost:3000` (standardport).

## Feilsøking

- **Kan ikke koble til database?** Sjekk at MariaDB kjører og at databasekonfigurasjonen i koden er riktig.
- **Port i bruk?** Endre `PORT`-variabelen i kodebasen eller steng andre prosesser som bruker porten.

## Lisens

Dette prosjektet er lisensiert under MIT-lisensen.
