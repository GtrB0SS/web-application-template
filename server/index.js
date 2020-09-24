const express = require('express');
const app = express();
const cors = require("cors");

const { config } = require('./config/index');
const publicacionesAPI = require('./rutas/index');

const corsOptions = {origin : "*"};

app.use(cors(corsOptions));
app.use(express.json());

publicacionesAPI(app);

app.listen(config.port, () => {
    console.log(`servidor escuchando en ${config.port}`);
})