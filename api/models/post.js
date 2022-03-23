const db = require('../dbConfig/init');
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
                try
                {
                    let postsData = await db.query('SELECT * FROM posts');
                    let posts = postsData.rows.map(b => new Post(b));
                    res(posts);
                }
                catch (err)
                {
                    rej ('Posts not found, error: ' +err);
                }
            })
        }

        // CREATE POST CODE BELOW
         static create(title, author, content) {
            return new Promise (async (resolve, reject) => {
                try {
                    let postData = await db.query(`INSERT INTO posts (title, author, content) VALUES ($1, $2, $3) RETURNING *;`, [ title, author, content ]);
                    let newPost = new Post(postData.rows[0]);
                    resolve (newPost)

                } catch(err) {
                    reject('Error creating post: ' + err) 
                }
                
            })
        }
        
        
}

