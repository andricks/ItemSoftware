const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB Atlas
const uri = 'mongodb+srv://aestradaa10:8C1lW1hktkdWvCda@database.2bnxshh.mongodb.net/?retryWrites=true&w=majority&appName=database';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a la base de datos');
}).catch((err) => {
    console.log('Error al conectar a la base de datos:', err);
});

// Rutas
const itemsRoute = require('./routes/items');
app.use('/items', itemsRoute);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
