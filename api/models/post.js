const db = require('../db_config/config');
const SQL = require('sql-template-strings');

module.exports = class Post
{
        constructor(data)
        {
            this.title = data.title;
            this.author = data.author;
            this.body = data.body;
        }

        static get all()
        {
            return new Promise (async (res, rej) =>
            {
                    // TO WRITE SQL CODE
            })
        }

        //CREATE POST CODE BELOW
}

