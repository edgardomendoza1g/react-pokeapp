import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { useSearchParams } from "react-router-dom";
import { pokeAPI } from "../services/pokeAPI";

const Home = () => {
  const [pokemonList, setPokemonList] = useState<any[]>();
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const data = await pokeAPI.getPokemonList(setPokemonList);
        setPokemonList(data);
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
        setPokemonList([]);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        <Box>
          {pokemonList?.map((pokemon) => {
            const id = pokemon.url.split("/")[6];
            return (
              <Grid>
                <PokemonCard pokemon={pokemon} />
              </Grid>
            );
          })}
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
