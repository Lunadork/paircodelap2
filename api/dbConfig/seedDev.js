//requires
const db = require ('./init');
const fs = require('fs');

//save data to the database and log that the database is seeded now
const seeds = fs.readFileSync(__dirname + '/dev_seeds.sql').toString();
db.query(seeds, () => console.log('That should be the dev database seeded'));