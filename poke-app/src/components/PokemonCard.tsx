import React, { useState, useEffect } from "react";
import { CardContent, Typography, CardMedia, Chip, Box } from "@mui/material";
import { CardContainer, ContentContainer } from "../styles/theme";
import { PokemonDetail, PokemonIndividualProps } from "../types";

const PokemonCard: React.FC<{pokemon: PokemonIndividualProps}> = ( {pokemon} ) => {
  const { url, name } = pokemon;
  const [pokemonData, setPokemonData] = useState<PokemonDetail | null>(null);
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(url);
        const data: PokemonDetail = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, [url]);

  const frontSprite = pokemonData?.sprites.other.dream_world.front_default;

  return (
    <CardContainer>
      <CardMedia
        component="img"
        src={frontSprite}
        alt={name}
        style={{
          width: "150px",
          height: "150px",
          paddingTop: "0%",
          objectFit: "contain",
        }}
      />
      <CardContent>
        <ContentContainer>
          <Typography variant="caption" display="block" gutterBottom>
            #{pokemonData?.id}
          </Typography>
          <Typography variant="h5" display="block" gutterBottom>
            {name.charAt(0).toUpperCase() + name.slice(1)}
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
