//requires for DB
const db = require('../dbConfig/init');
const SQL = require('sql-template-strings');

//define and simultaneously export Post class
module.exports = class Post
{
        //basic constructor
        constructor(data)
        {
            this.id = data.id;
            this.title = data.title;
            this.author = data.author;
            this.body = data.body;
        }

        //get all function
        static get all()
        {
            return new Promise (async (res, rej) =>
            {   
                try
                {
                    let postsData = await db.query('SELECT * FROM posts;');
                    let posts = postsData.rows.map(b => new Post(b));
                    res(posts);
                }
                catch (err)
                {
                    rej ('Posts not found, error: ' +err);
                }
            })
        }


        //Find a single post and return it
        static findById(id) {
            return new Promise(async (res, rej) => {
                try 
                {
                    let postData = await db.query(`SELECT * FROM posts WHERE id = $1;`, [ id ]);
                    res(postData.rows[0]); 
                } catch (err) {
                    rej('Post not found' + err)
                }
            })
        }



        // Create a post, return the new post in the response/resolve code
         static create(reqbody) {
            return new Promise (async (resolve, reject) => {
                try {
                    let postData = await db.query(`INSERT INTO posts (title, author, body) VALUES ($1, $2, $3) RETURNING *;`, [ reqbody.title, reqbody.author = "anonymous", reqbody.body ]);
                    resolve (postData.rows[0]);
                } catch(err) {
                    reject('Error creating post: ' + err) 
                }
                
            })
        }
        
        
}

