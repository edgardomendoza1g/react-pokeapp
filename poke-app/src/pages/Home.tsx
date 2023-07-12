import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Grid, Button, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import PokemonCard from "../components/PokemonCard";
import {
  fetchPokemonList,
  fetchTotalCount,
  handleSearchChange as handleSearchChangeUtil,
  handlePreviousPage as handlePreviousPageUtil,
  handleNextPage as handleNextPageUtil,
  handleAddToTeam as handleAddToTeamUtil,
  handleRemoveFromTeam as handleRemoveFromTeamUtil,
} from "../utils/utils";
import { PokemonIndividualProps } from "../types";

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonIndividualProps[]>([]);
  const [originalPokemonList, setOriginalPokemonList] = useState<
    PokemonIndividualProps[]
  >([]);
  const [offset, setOffset] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [teamPokemon, setTeamPokemon] = useState<PokemonIndividualProps[]>([]);

  useEffect(() => {
    fetchPokemonList(offset, setPokemonList, setOriginalPokemonList);
  }, [offset]);

  useEffect(() => {
    fetchTotalCount(setTotalCount);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChangeUtil(e, originalPokemonList, setPokemonList);
  };

  const handlePreviousPage = () => {
    handlePreviousPageUtil(offset, setOffset);
  };

  const handleNextPage = () => {
    handleNextPageUtil(offset, totalCount, setOffset);
  };

  const handleAddToTeam = (pokemon: PokemonIndividualProps) => {
    handleAddToTeamUtil(pokemon, teamPokemon, setTeamPokemon);
  };

  const handleRemoveFromTeam = (pokemon: PokemonIndividualProps) => {
    handleRemoveFromTeamUtil(pokemon, teamPokemon, setTeamPokemon);
  };

  return (
    <Box
      sx={{
        backgroundColor: grey[100],
        justifyContent: "center",
        margin: "0px",
        paddingLeft: "0px",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Pokemon App
      </Typography>
      <TextField
        label="Search Pokemon"
        variant="outlined"
        onChange={handleSearchChange}
        sx={{ marginBottom: "1rem" }}
      />
      <Grid container spacing={5}>
        {pokemonList.map((pokemon) => {
          const id = pokemon.url.split("/")[6];
          return (
            <Grid item xs={12} sm={6} md={4} lg={2.25} key={pokemon.name}>
              <Link to={`/pokemon/${id}`} style={{ textDecoration: "none" }}>
                <PokemonCard pokemon={pokemon} />
              </Link>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "-0rem",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => handleAddToTeam(pokemon)}
                  sx={{
                    marginTop: "-2.5rem",
                    borderRadius: "0px 20px 0px 20px",
                    backgroundColor: "rgba(0, 0, 2, 1)",
                    transition: "background-color 0.3s ease-out",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 30, 1)",
                    },
                    "&:active": {
                      backgroundColor: "rgba(0, 0, 255, 1)",
                    },
                  }}
                >
                  Add to Team
                </Button>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box mt={4} textAlign="center">
        <Button
          variant="contained"
          onClick={handlePreviousPage}
          disabled={offset === 0}
          sx={{ margin: "1rem", borderRadius: "20px" ,
          backgroundColor: "rgba(2, 0, 0, 0.5)",
          transition: "background-color 0.3s ease-out",
          "&:hover": {
            backgroundColor: "rgba(25, 0, 0, 1)",
          },
          "&:active": {
            backgroundColor: "rgba(2, 0, 0, 1)",
          },}}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNextPage}
          disabled={offset >= totalCount - 25}
          sx={{
            borderRadius: "20px",
            backgroundColor: "rgba(2, 0, 0, 0.5)",
            transition: "background-color 0.3s ease-out",
            "&:hover": {
              backgroundColor: "rgba(25, 0, 0, 1)",
            },
            "&:active": {
              backgroundColor: "rgba(2, 0, 0, 1)",
            },
          }}
        >
          Next
        </Button>
      </Box>
      {teamPokemon.length > 0 && (
        <>
          <Typography variant="h4" gutterBottom>
            Team Pokemon
          </Typography>
          <Grid container spacing={2}>
            {teamPokemon.map((pokemon) => (
              <Grid item xs={12} sm={6} md={4} lg={2.25} key={pokemon.name}>
                <PokemonCard pokemon={pokemon} />
                <Button
                  variant="contained"
                  onClick={() => handleRemoveFromTeam(pokemon)}
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "rgba(2, 0, 0, 0.5)",
                    transition: "background-color 0.3s ease-out",
                    "&:hover": {
                      backgroundColor: "rgba(25, 0, 0, 1)",
                    },
                    "&:active": {
                      backgroundColor: "rgba(2, 0, 0, 1)",
                    },
                  }}
                >
                  Remove from Team
                </Button>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Home;
