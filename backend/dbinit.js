const db = require("./dbconnector");

async function createGamesTable() {
  const createGamesTable = `
    CREATE TABLE IF NOT EXISTS games (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      releaseYear INT,
      gameType VARCHAR(100),
      gameCompany VARCHAR(255),
      gameConsole VARCHAR(255),
      maxPlayer INT DEFAULT 1,
      minPlayer INT DEFAULT 1
    );
  `;
  const insertGames = `
  INSERT INTO games (name, releaseYear, gameType, gameCompany, gameConsole, maxPlayer, minPlayer) VALUES 
  ('Ticket to Ride (original)', 2004, 'Board Game', 'Days of Wonder', 'Tabletop', 5, 2), 
  ('Arboretum board game', 2015, 'Board Game', 'Z-Man Games', 'Tabletop', 4, 2),
  ('Legacy of Dragonholt', 2017, 'Role-Playing Game', 'Fantasy Flight Games', 'Tabletop', 6, 1),
  ('Sherlock Holmes: Carlton House/Queen Park', 2011, 'Board Game', 'Space Cowboys', 'Tabletop', 8, 1),
  ('Legend of Zelda: Tears of the Kingdom', 2023, 'Video Game', 'Nintendo', 'Nintendo Switch', 1, 1),
  ('Hogwarts Legacy', 2023, 'Video Game', 'Portkey Games', 'PlayStation 5, Xbox, PC', 1, 1),
  ('The Last of Us 1', 2013, 'Video Game', 'Naughty Dog', 'PlayStation 3, PlayStation 4, PC', 1, 1),
  ('The Last of Us 2', 2020, 'Video Game', 'Naughty Dog', 'PlayStation 4, PC', 1, 1),
  ('The Legend of Zelda: Breath of the Wild', 2017, 'Video Game', 'Nintendo', 'Nintendo Switch, Wii U', 1, 1),
  ('Cribbage', 1630, 'Card Game', 'Unknown', 'Tabletop', 2, 2),
  ('The Witcher 3: Wild Hunt', 2015, 'Video Game', 'CD Projekt Red', 'PlayStation 4, Xbox, PC, Switch', 1, 1),
  ('Baldurs Gate 3', 2023, 'Role-Playing Game', 'Larian Studios', 'PC, PlayStation 5', 4, 1),
  ('It Takes Two', 2021, 'Video Game', 'Hazelight Studios', 'PlayStation, Xbox, PC', 2, 2);
  `;

  try {
    await db.query(createGamesTable);
    console.log('Table "games" created successfully!');

    await db.query(insertGames);
    console.log("Games added!");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    process.exit();
  }
}

createGamesTable();

//Kjør filen med node dbinit.js
