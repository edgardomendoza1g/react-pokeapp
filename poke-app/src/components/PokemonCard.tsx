import React, { useState, useEffect } from "react";
import { CardContent, Typography, CardMedia } from "@mui/material";
import { CardContainer, ContentContainer, Title } from "../styles/theme";

const PokemonCard: React.FC<any> = () => {
  return (
    <CardContainer>
      <CardMedia
        component="img"
       
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
            Charizard
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Name
          </Typography>
        </ContentContainer>
      </CardContent>
    </CardContainer>
  );
};

export default PokemonCard;
