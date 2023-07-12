import React, { useState, useEffect } from "react";
import { CardContent, Typography, CardMedia, Chip, Box } from "@mui/material";
import { CardContainer, ContentContainer } from "../styles/theme";
import { PokemonDetail, PokemonIndividualProps } from "../types";

const PokemonCard: React.FC<{ pokemon: PokemonIndividualProps }> = ({
  pokemon,
}) => {
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
          <Typography variant="caption" display="block" gutterBottom style={{ fontWeight: "bold", fontSize: "0.8rem" }}>
            <Typography
              variant="caption"
              display="inline"
              gutterBottom
              style={{ fontWeight: "lighter", fontSize: "1rem" }}
            >
            Number: 
            </Typography>{" "}
            {pokemonData?.id}
          </Typography>

          <Typography variant="h5" display="block" gutterBottom>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "2px",
              padding: "2px",
            }}
          >
            {pokemonData?.types.map((type, index) => (
              <React.Fragment key={type.slot}>
                <Chip
                  label={
                    type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)
                  }
                  clickable
                />
                {index !== pokemonData.types.length - 1 && (
                  <Box sx={{ width: 6 }} />
                )}
              </React.Fragment>
            ))}
          </Box>
        </ContentContainer>
      </CardContent>
    </CardContainer>
  );
};

export default PokemonCard;
