const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const database = require("./dbconnector.js");
app.use(express.json());

app.use(
  cors({
    origin: "*", // Allows all origins
    methods: ["GET, POST"], // Allows only GET requests
  })
);

app.get("/home", (req, res) => {
  res.send("Hello, Madde!");
});

//Hent ut allt i databasen - alle spill
app.get("/games", async (req, res) => {
  let query = "SELECT * FROM games;";

  try {
    let games = await database.query(query);

    res.send(games);
  } catch (error) {
    res.send(error);
  }
});

//Hent ut liste med spillnavn
app.get("/nameofgames", async (req, res) => {
  let query = "SELECT name FROM games;";

  try {
    let games = await database.query(query);

    res.send(games);
  } catch (error) {
    res.send(error);
  }
});

app.post("/newgame", async (req, res) => {
  let newGame = req.body;
  let query = `INSERT INTO games (name, releaseYear, gameType, gameCompany, gameConsole, maxPlayer, minPlayer) VALUES (${newGame.name}, ${newGame.releaseYear}, ${newGame.gameType}, ${newGame.gameConsole})`;

  try {
    let newGame = await database.query(query);

    res.send(newGame);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//Kjør i terminalen - HUSK å vær inni riktig mappe:    node app.js

//Kjør i terminalen:    nodemon app.js
// //oppdaterer automatisk ved lagret fil

//lukk serveren: CONTROL + c
// Template strings: OPTION + `` (ved siden av ?+)
