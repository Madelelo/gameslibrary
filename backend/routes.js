const express = require("express");
const router = express.Router();
const db = require("./dbconnector");

router.get("/", (req, res) => {
  res.send("Velkommen til mitt spillbibliotek.");
});

//Check DB connection and show all tables
router.get("/db", async (req, res) => {
  try {
    let tables = await db.query("SHOW TABLES;");
    console.log(`Database connected: ${tables}`);
    res.send(tables);
  } catch (error) {
    res.send(error);
  }
});

//Get list of games (names only)
router.get("/nameOfGames", async (req, res) => {
  try {
    const nameOfGames = await db.query("SELECT name FROM games;");
    res.send(nameOfGames);
  } catch (error) {
    res.send(error);
  }
});

//Get all games with all information
router.get("/games", async (req, res) => {
  try {
    const games = await db.query("SELECT * FROM games;");
    res.send(games);
  } catch (error) {
    res.send(error);
  }
});

//Add new game to database
router.post("/newGame", async (req, res) => {
  let newGame = req.body; //dataen fra nettleseren
  //Dataen fra nettleseren:
  // {
  //   "name": "Scout!",
  //   "releaseYear": 2022,
  //   "gameCompany": "Oink Games",
  //   "gameType": "Cardbased boardgame",
  //   "gameConsole": ["Tabletop", "Travel"],
  //   "maxPlayer": 6,
  //   "minPlayer": 2
  // }

  let query = `
  INSERT INTO games (name, releaseYear, gameType, gameCompany, gameConsole, maxPlayer, minPlayer) VALUES 
  ('${newGame.name}', ${newGame.releaseYear}, '${newGame.gameType}', '${newGame.gameType}', '${newGame.gameConsole}', ${newGame.maxPlayer}, ${newGame.minPlayer});
  `;

  try {
    const dbResponce = await db.query(query);
    res.json(`New game added to database:  ${newGame.name}`);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
