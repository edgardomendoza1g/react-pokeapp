import { Grid } from "@mui/material";
import React from "react";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PokemonCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
