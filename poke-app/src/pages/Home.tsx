import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { Link, useSearchParams } from "react-router-dom";
import { pokeAPI } from "../services/pokeAPI";
import { blue, grey } from "@mui/material/colors";

const Home = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    fetchPokemonList();
  }, [offset]);

  useEffect(() => {
    fetchTotalCount();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const data = await pokeAPI.getPokemonList(offset, setPokemonList);
      setPokemonList(data);
    } catch (error) {
      console.error("Error fetching Pokemon list:", error);
      setPokemonList([]);
    }
  };

  const fetchTotalCount = async () => {
    try {
      const count = await pokeAPI.getTotalPokemonCount();
      setTotalCount(count);
    } catch (error) {
      console.error("Error fetching total count of Pokémon:", error);
      setTotalCount(0);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.trim();
    pokeAPI.debouncedSearch(searchTerm, pokemonList, setPokemonList);
  };

  const handlePreviousPage = () => {
    if (offset >= 25) {
      setOffset(offset - 25);
    }
  };

  const handleNextPage = () => {
    if (offset + 25 < totalCount) {
      setOffset(offset + 25);
    }
  };

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
        onChange={handleSearchChange}
      />
      <Grid container spacing={2}>
        {pokemonList.map((pokemon) => {
          const id = pokemon.url.split("/")[6];
          return (
            <Grid item xs={12} sm={6} md={4} lg={2.25} key={pokemon.name}>
              <Link to={`/pokemon/${id}`} style={{ textDecoration: "none" }}>
                <PokemonCard pokemon={pokemon} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Box mt={4} textAlign="center">
        <button onClick={handlePreviousPage} disabled={offset === 0}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={offset >= totalCount - 25}>
          Next
        </button>
      </Box>
    </Box>
  );
};

export default Home;
