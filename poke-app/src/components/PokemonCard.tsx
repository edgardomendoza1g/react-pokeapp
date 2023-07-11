import React, { useState, useEffect } from "react";
import { CardContent, Typography, CardMedia } from "@mui/material";
import { CardContainer, ContentContainer, Title } from "../styles/theme";
import { PokemonDetail, PokemonProps } from "../types";

const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState<PokemonDetail>();
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(pokemon.url);
        const data: PokemonDetail = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, [pokemon.url]);

  const frontSprite = pokemonData?.sprites.other.dream_world.front_default;

  return (
    <CardContainer>
      <CardMedia
        component="img"
        src={frontSprite}
        style={{
          width: "150px",
          height: "150px",
          paddingTop: "0%",
          objectFit: "contain",
        }}
      />
      <CardContent>
        <ContentContainer>
          <Typography variant="subtitle1"># 1</Typography>
          <Typography component="div" variant="h5">
            {pokemon.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Name
          </Typography>
        </ContentContainer>
      </CardContent>
    </CardContainer>
  );
};

export default PokemonCard;
