const express = require("express");
const createPokemonService = require("../services/pokemon.service.js");

const pokemonController = () => {
    const router = express.Router();
    const pokemonService = createPokemonService();
    
    router.get('/pokemons/by-city', (req, res) => {
        const result = pokemonService.byCity("Itapira");
        res.send({result});
    });

    router.get('/pokemons/by-location', (req, res) => {
        res.send("Hellow World");
    });

    return router;
};

module.exports = pokemonController;