const API_URL = "http://localhost:3000/";

async function generateGameCards() {
  const res = await fetch(API_URL + "games");
  const data = await res.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    generateGameCard(data[i]);
  }

  document.getElementById("game-counter").innerHTML =
    "Antall spill i databasen: " + data.length;
}

function generateGameCard(game) {
  const card = document.createElement("div");
  card.className = "games-card";

  //Add name
  const name = document.createElement("h3");
  const nameNode = document.createTextNode(game.name);
  name.appendChild(nameNode);
  card.appendChild(name);

  //Add year
  const year = document.createElement("p");
  const yearNode = document.createTextNode(game.releaseYear);
  year.appendChild(yearNode);
  card.appendChild(year);

  //Add type
  const type = document.createElement("p");
  const typeNode = document.createTextNode(game.gameType);
  type.appendChild(typeNode);
  card.appendChild(type);

  //Add console
  const console = document.createElement("p");
  const consoleNode = document.createTextNode(game.gameConsole);
  console.appendChild(consoleNode);
  card.appendChild(console);

  //Add company
  const company = document.createElement("p");
  const companyNode = document.createTextNode(game.gameCompany);
  company.appendChild(companyNode);
  card.appendChild(company);

  //Players
  const players = document.createElement("p");
  const playersNode = document.createTextNode(
    `From ${game.minPlayer} to ${game.maxPlayer} players`
  );

  players.appendChild(playersNode);
  card.appendChild(players);

  //Adds card to HTML
  const element = document.getElementById("games-list");
  element.appendChild(card);
}

generateGameCards();

function addGame() {
  // let newName = document.getElementById("new-game-name").value;

  let newGame = {
    name: document.getElementById("new-game-name").value,
    releaseYear: document.getElementById("new-game-year").value,
    gameCompany: document.getElementById("new-game-company").value,
    gameType: document.getElementById("new-game-type").value,
    gameConsole: document.getElementById("new-game-console").value,
    minPlayer: document.getElementById("new-game-min").value,
    maxPlayer: document.getElementById("new-game-max").value,
  };

  console.log(newGame);

  fetch(API_URL + "newGame", {
    method: "POST",
    body: JSON.stringify(newGame),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
  generateGameCards();
}
