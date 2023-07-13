import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const CardContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(8),
}));

const FormContainer = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos de inicio de sesión al backend
    // ...
  };

  return (
    <CardContainer maxWidth="xs">
      <Typography variant="h4" align="center">
        Login
      </Typography>
      <FormContainer onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
        </Grid>
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Sign In
        </SubmitButton>
      </FormContainer>
    </CardContainer>
  );
};

export default Login;
