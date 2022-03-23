const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors('*'));
app.use(express.json());

const postRoutes = require('./routes/posts');

app.use('/posts', postRoutes);


app.get('/', (req, res) => 
        res.json
        ({
            message: 'Lap 2 pair code challenge' 
        }));

module.exports = app;