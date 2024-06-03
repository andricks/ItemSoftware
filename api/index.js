const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config();
const cors = require('cors');

const app = express();
const PORT = 4000;
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB Atlas
// Set the strictQuery option
mongoose.set('strictQuery', true); // or false, depending on your preference

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Rutas
const itemsRoute = require('./routes/items');
app.use('/items', itemsRoute);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
