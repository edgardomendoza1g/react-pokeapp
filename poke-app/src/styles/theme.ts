import { styled } from "@mui/system";
import { Card, CardContent, Typography } from "@mui/material";

export const CardContainer = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  height: "300px",
});

export const ContentContainer = styled(CardContent)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
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

export const ImageContainer = styled("img")({
  width: "150px",
  height: "150px",
  objectFit: "contain",
  borderRadius: "50%",
  marginBottom: "1rem",
  border: "10px solid lightgreen",
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
