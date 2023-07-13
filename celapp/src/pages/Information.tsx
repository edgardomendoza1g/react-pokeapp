import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Container, TextField, Typography, Grid, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Cliente from "../types";


const Information = () => {
  const [cliente, setCliente] = useState<Cliente | null  >(null);

  useEffect(() => {
    fetch('http://localhost:3000/information', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCliente(data);
      })
      .catch((error) => {
        console.error('Error al obtener la información del cliente:', error);
      });
  }, []);

  if (!cliente) {
    return <div>Cargando información del cliente...</div>;
  }

  return (
    <Container>
      <Typography variant="h4" align="center">
        Información del Cliente
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={cliente.nombre}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Apellido"
            variant="outlined"
            fullWidth
            value={cliente.apellido}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={cliente.email}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Dirección"
            variant="outlined"
            fullWidth
            value={cliente.direccion}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Edad"
            variant="outlined"
            fullWidth
            type="number"
            value={cliente.edad}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <img src={cliente.imagen} alt="Imagen del cliente" />
        </Grid>
      </Grid>

      <DataGrid
        rows={cliente.items}
        columns={[
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'descripcion', headerName: 'Descripción', width: 200 },
          { field: 'cantidad', headerName: 'Cantidad', width: 120 },
          { field: 'precio', headerName: 'Precio', width: 120 },
          { field: 'total', headerName: 'Total', width: 120, valueGetter: (params) => params.getValue(params.id, 'cantidad') * params.getValue(params.id, 'precio') },
        ]}
        autoHeight
      />
    </Container>
  );
};

export default Information;
