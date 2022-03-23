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


        //SHOW SINGLE POST CODE BELOW
        static findById(id) {
            return new Promise(async (res, rej) => {
                try 
                {
                    let postData = await db.query(`SELECT * FROM posts WHERE id = $1;`, [ id ]);
                    //let post = new Post(postData.rows[0]);
                    res(postData.rows[0]); 
                } catch (err) {
                    rej('Post not found' + err)
                }
            })
        }



        // CREATE POST CODE BELOW
         static create(reqbody) {
            return new Promise (async (resolve, reject) => {
                try {
                    let postData = await db.query(`INSERT INTO posts (title, author, body) VALUES ($1, $2, $3) RETURNING *;`, [ reqbody.title, reqbody.author, reqbody.body ]);
                    // let newPost = new Post(postData.rows[0]);
                    resolve (postData.rows[0]);
                } catch(err) {
                    reject('Error creating post: ' + err) 
                }
                
            })
        }
        
        
}

