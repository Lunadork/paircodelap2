//setup requires
const app = require('./server');

//setup port
const port = process.env.PORT || 3000;

//start server
app.listen(port, () => console.log (`server listening on port ${port}`));