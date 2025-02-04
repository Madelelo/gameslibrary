const API_URL = "http://localhost:3000/";

async function generateGameCards() {
  const res = await fetch(API_URL + "games");
  const data = await res.json();

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
  const yearNode = document.createTextNode(game.year);
  year.appendChild(yearNode);
  card.appendChild(year);

  //Add type
  const type = document.createElement("p");
  const typeNode = document.createTextNode(game.type);
  type.appendChild(typeNode);
  card.appendChild(type);

  //Add console
  const console = document.createElement("p");
  const consoleNode = document.createTextNode(game.console);
  console.appendChild(consoleNode);
  card.appendChild(console);

  //Adds card to HTML
  const element = document.getElementById("games-list");
  element.appendChild(card);
}

generateGameCards();

function addGame() {
  let newName = document.getElementById("new-game-name").value;

  let newGame = {
    name: newName,
    year: 2024,
    id: 5,
    company: "  ",
    type: " ",
    console: [],
  };

  fetch(API_URL + "newgame", {
    method: "POST",
    body: JSON.stringify({ newGame }),
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
