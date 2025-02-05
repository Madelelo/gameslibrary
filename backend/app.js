const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

const routes = require("./routes");
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
