import React, { useState, useEffect } from "react";
import classes from './pokemonCards.module.css';

const PokemonCard = ({ pokemons }) => {
    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const promises = pokemons.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch details for ${pokemon.name}`);
                    }
                    return response.json();
                });

                const details = await Promise.all(promises);
                setPokemonDetails(details);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchPokemonDetails();
    }, [pokemons]);

    const renderPokemonCards = () => {
        return pokemonDetails.map((details, index) => (
            <div key={index} className={classes.card}>
                <img
                    src={details.sprites.other.dream_world.front_default}
                    alt={details.name}
                />
                <h3>{details.name}</h3>
            </div>
        ));
    };

    return (
        <div className={classes.cardWrapper}>
            {renderPokemonCards()}
        </div>
    );
};

export default PokemonCard;
