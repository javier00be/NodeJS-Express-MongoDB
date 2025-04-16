// Requiere las dependencias necesarias
const express = require('express');
const cors = require('cors');
require('dotenv').config();  // Para manejar variables de entorno

const app = express();  // Crea una instancia de la aplicación de Express

// Middleware
app.use(cors());  // Habilita CORS para todas las solicitudes
app.use(express.json());  // Para parsear las solicitudes JSON

// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!');
});

// Aquí puedes agregar más rutas, como:
// app.get('/usuarios', (req, res) => { ... });
// app.post('/login', (req, res) => { ... });

// Define el puerto donde se ejecutará tu servidor
const PORT = process.env.PORT || 3000;

// Levanta el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
