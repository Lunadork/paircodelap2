//Import pg / postgres
const { Pool } = require ("pg");
//start our pool (idk what this really does I'll be honest)
const pool = new Pool();

//export the pool for use
module.exports = pool;