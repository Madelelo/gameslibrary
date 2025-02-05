const express = require("express");
const router = express.Router();

const games = [
  {
    name: "The Legend of Zelda: Breath of the Wild",
    year: 2017,
    company: "Nintendo",
    type: "Action-adventure",
    console: ["Nintendo Switch", "Wii U"],
    minPlayer: 1,
    maxPlayer: 1,
  },
  {
    name: "Cribbage",
    year: 0,
    company: "??",
    type: "Cardbased boardgame",
    console: ["Tabletop, Travel"],
    minPlayer: 2,
    maxPlayer: 6,
  },
  {
    name: "The Witcher 3: Wild Hunt",
    year: 2015,
    company: "CD Projekt",
    type: "Action role-playing",
    console: [
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "Microsoft Windows",
    ],
    minPlayer: 1,
    maxPlayer: 1,
  },

  {
    name: "Baldur's Gate 3",
    year: 2020,
    company: "Larian Studios",
    type: "Role-playing",
    console: ["Microsoft Windows", "Stadia"],
    minPlayer: 1,
    maxPlayer: 2,
  },
  {
    name: "It Takes Two",
    year: 2021,
    company: "Hazelight Studios",
    type: "Action-adventure, platformer, cooperative",
    console: [
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Microsoft Windows",
    ],
    minPlayer: 2,
    maxPlayer: 2,
  },
];

router.get("/", (req, res) => {
  res.send(
    "Velkommen til mitt spillbibliotek. For oversikt over alle spill gå til /games. For en liste med spill gå til /nameofgames."
  );
});

//Get all games with all information
router.get("/games", (req, res) => {
  res.send(games);
});

//Get list of games (names only) in json
router.get("/nameOfGames", (req, res) => {
  let nameOfGames = games.map((game) => {
    return game.name;
  });
  res.send(nameOfGames);
});

//Add new game (using post)
console.log(`Number of games: ${games.length}`);
router.post("/newGame", (req, res) => {
  let newGame = req.body;
  games.push(newGame);
  console.log(
    `New game added to database: ${newGame.name}. Number of games: ${games.length}`
  );

  res.send(
    `New game added to database: ${newGame.name}. Number of games: ${games.length}`
  );
});

//Body for httpie
// {
//   "name": "Scout!",
//   "releaseYear": 2022,
//   "gameCompany": "Oink Games",
//   "gameType": "Cardbased boardgame",
//   "gameConsole": ["Tabletop", "Travel"],
//   "maxPlayer": 6,
//   "minPlayer": 2
// }

//Curl
// curl -X POST http://localhost:3000/newGame \-H "Content-Type: application/json" \-d '{"name": "Scout!",  "releaseYear": 2022, "gameCompany": "Oink Games", "gameType": "Cardbased boardgame", "gameConsole": ["Tabletop", "Travel"], "maxPlayer": 6, "minPlayer": 2 }'

module.exports = router;
