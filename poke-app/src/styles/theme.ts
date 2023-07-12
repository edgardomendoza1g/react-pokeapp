import { styled } from "@mui/system";
import { Card, CardContent, Typography } from "@mui/material";

export const CardContainer = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  borderRadius: "20px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "0.5s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
  },
  height: "300px",
  border: "1px  green",
});

export const ContentContainer = styled(CardContent)({
  height:'70%',
  width: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  borderRadius: "20px",

});

export const Title = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

export const InfoContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
});

export const ImageContainer = styled("div")({
  width: "100px",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "1rem",
  border: "10px solid lightgreen",
});

export const Image = styled("img")({
  maxWidth: "100%",
  maxHeight: "90%",
});

export const InfoPage = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
});

export const StatContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "0.5rem",
});

export const StatLabel = styled(Typography)({
  fontSize: "1rem",
  fontWeight: "bold",
});

export const StatValue = styled(Typography)({
  fontSize: "1rem",
});
