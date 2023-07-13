interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  direccion: string;
  fechanacimiento: string;
  imagen: string;
  items: Item[];
  edad:number;
}
export interface Item {
  id: number;
  descripcion: string;
  cantidad: number;
  precio: number;
}

export default Cliente;
