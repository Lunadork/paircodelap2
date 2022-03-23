const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors('*'));
app.use(express.json());

const routes = require('./routes/routes');

app.use('/routes', routes);


app.get('/', (req, res) => 
        res.json
        ({
            message: 'Lap 2 pair code challenge' 
        }));

module.exports = app;