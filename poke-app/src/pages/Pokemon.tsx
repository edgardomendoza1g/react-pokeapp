import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokeAPI } from "../services/pokeAPI";
import {
  Typography,
  CircularProgress,
  Chip,
  Box,
  Card,
  Container,
  Grid,
} from "@mui/material";
import {
  InfoContainer,
  ImageContainer,
  InfoPage,
  Title,
  StatContainer,
  StatLabel,
  StatValue,
} from "../styles/theme";

const Pokemon: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [pokemonDetail, setPokemonDetail] = useState<any | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const parsedId = parseInt(id!, 10);
        const data = await pokeAPI.getPokemonDetail(parsedId);
        setPokemonDetail(data);
      } catch (error) {
        console.error("Error fetching Pokemon detail:", error);
        setPokemonDetail(null);
      }
    };

    fetchPokemonDetail();
  }, [id]);

  if (!pokemonDetail) {
    return <CircularProgress />;
  }

  const { name, height, weight, sprites, types, stats } = pokemonDetail;

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box sx={{ marginTop: "2rem", textAlign: "center" }}>
            <img src={sprites.other.dream_world.front_default} alt={name} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box sx={{ marginTop: "2rem" }}>
            <Typography
              variant="h4"
              sx={{
                marginTop: "1rem",
                textAlign: "center",
                fontFamily: "Arial",
              }}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Typography>
            <Grid
              container
              spacing={1}
              sx={{ marginBottom: "1rem", justifyContent: "center" }}
            >
              {types.map((type: any) => (
                <Grid item key={type.slot}>
                  <Chip
                    label={type.type.name}
                    variant="outlined"
                    sx={{
                      fontFamily: "Verdana",
                      color: 'black',
                      backgroundColor: 'green',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Height:
                </Typography>
                <Typography>{height / 10} m</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Weight:
                </Typography>
                <Typography>{weight / 10} kg</Typography>
              </Grid>
            </Grid>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                marginTop: "1rem",
                fontFamily: "Arial",
              }}
            >
              Stats
            </Typography>
            {stats.map((stat: any) => (
              <Grid container key={stat.stat.name} spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography>{stat.stat.name}:</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography>{stat.base_stat}</Typography>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pokemon;
