const express = require("express");
const bodyParser = require("body-parser");
const pokemonController = require("./controllers/pokemon.controller");
const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(pokemonController());

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

