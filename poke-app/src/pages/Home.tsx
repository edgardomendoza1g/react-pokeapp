import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { Link, useSearchParams } from "react-router-dom";
import { pokeAPI } from "../services/pokeAPI";
import { blue, grey } from "@mui/material/colors";

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
    <Box
      sx={{
        backgroundColor: grey[100],
      }}
    >
      <Typography variant="h2" gutterBottom>
        Pokemon App
      </Typography>
      <TextField
        label="Search Pokemon"
        variant="outlined"
        onChange={(e) => {}}
      />
      <Grid container spacing={4}>
        {pokemonList?.map((pokemon) => {
          const id = pokemon.url.split("/")[6];
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
              <Link to={`/pokemon/${id}`} style={{ textDecoration: "none" }}>
                <PokemonCard pokemon={pokemon} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Home;
