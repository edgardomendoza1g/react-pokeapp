import React, { useState, useEffect } from "react";
import { CardContent, Typography, CardMedia, Chip, Box } from "@mui/material";
import { CardContainer, ContentContainer, Title } from "../styles/theme";
import Icon from "@mui/material/Icon";

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
        alt={pokemon.name}
        style={{
          width: "150px",
          height: "150px",
          paddingTop: "0%",
          objectFit: "contain",
        }}
      />
      <CardContent>
        <ContentContainer>
        <Typography variant="caption" display="block" gutterBottom>#{pokemonData?.id}</Typography>
          <Typography variant="h5" display="block" gutterBottom>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
          <Box>
            {pokemonData?.types.map((type) => (
              <Chip key={type.slot} label={type.type.name} clickable />
            ))}
          </Box>
        </ContentContainer>
      </CardContent>
    </CardContainer>
  );
};

export default PokemonCard;
