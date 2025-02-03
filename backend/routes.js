const express = require("express");
const router = express.Router();

const games = [
  {
    name: "The Legend of Zelda: Breath of the Wild",
    year: 2017,
    id: 1,
    company: "Nintendo",
    type: "Action-adventure",
    console: ["Nintendo Switch", "Wii U"],
  },
  {
    name: "Cribbage",
    year: 0,
    id: 6,
    company: "??",
    type: "Cardbased boardgame",
    console: ["Tabletop, Travel"],
  },
  {
    name: "The Witcher 3: Wild Hunt",
    year: 2015,
    id: 2,
    company: "CD Projekt",
    type: "Action role-playing",
    console: [
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "Microsoft Windows",
    ],
  },

  {
    name: "Baldur's Gate 3",
    year: 2020,
    id: 3,
    company: "Larian Studios",
    type: "Role-playing",
    console: ["Microsoft Windows", "Stadia"],
  },
  {
    name: "It Takes Two",
    year: 2021,
    id: 4,
    company: "Hazelight Studios",
    type: "Action-adventure, platformer, cooperative",
    console: [
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Microsoft Windows",
    ],
  },
];

router.get("/home", (req, res) => {
  res.send("Velkommen til mitt spillbibliotek.");
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

let newGame = {
  name: "Scout",
  year: 2024,
  id: 9,
  company: "Oink games",
  type: "Cardbased boardgame",
  console: ["Tabletop", "Travel"],
};

module.exports = router;
