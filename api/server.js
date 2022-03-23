//setup requires
const express = require('express');
const app = express();
const cors = require('cors');

//setup uses
app.use(cors('*'));
app.use(express.json());

//Setup routes
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

//Base dir setup - returns a hello world equivalent
app.get('/', (req, res) => 
        res.json
        ({
            message: 'Lap 2 pair code challenge api by Zeia and Heather' 
        }));


// export the express server
module.exports = app;