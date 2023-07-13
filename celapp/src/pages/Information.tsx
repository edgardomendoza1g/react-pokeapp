import React, { useState } from "react";
import { styled } from "@mui/system";
import { Container, TextField, Typography, Grid, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const FormContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "2rem",
});

const TextFieldsContainer = styled(Grid)({
  marginBottom: "1rem",
});

const DataGridContainer = styled(Container)({
  marginTop: "2rem",
});

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "descripcion", headerName: "Descripción", width: 200 },
  { field: "cantidad", headerName: "Cantidad", width: 120 },
  { field: "precio", headerName: "Precio", width: 120 },
  { field: "total", headerName: "Total", width: 120 },
];

const rows = [
  { id: 1, descripcion: "Producto 1", cantidad: 1, precio: 10, total: 10 },
  { id: 2, descripcion: "Producto 2", cantidad: 2, precio: 15, total: 30 },
  { id: 3, descripcion: "Producto 3", cantidad: 3, precio: 20, total: 60 },
];

const Information = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [edad, setEdad] = useState("");

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDireccionChange = (e) => {
    setDireccion(e.target.value);
  };

  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  };

  return (
    <>
      <FormContainer>
        <Typography variant="h4" align="center" gutterBottom>
          Información del Cliente
        </Typography>
        <TextFieldsContainer container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              value={nombre}
              onChange={handleNombreChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Apellido"
              variant="outlined"
              fullWidth
              value={apellido}
              onChange={handleApellidoChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Dirección"
              variant="outlined"
              fullWidth
              value={direccion}
              onChange={handleDireccionChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Edad"
              variant="outlined"
              type="number"
              fullWidth
              value={edad}
              onChange={handleEdadChange}
            />
          </Grid>
        </TextFieldsContainer>
        <Button variant="contained" color="primary">
          Guardar
        </Button>
      </FormContainer>
      <DataGridContainer>
        <Typography variant="h5" align="center" gutterBottom>
          Items
        </Typography>
        <DataGrid rows={rows} columns={columns} pageSize={5} autoHeight />
      </DataGridContainer>
    </>
  );
};

export default Information;
