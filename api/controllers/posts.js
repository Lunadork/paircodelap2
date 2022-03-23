// Require post model
const Post = require('../models/post');

//show all route controller code.
async function showAll (req,res)
{
    try 
    {
        const posts = await Post.all;
        res.status(200).json(posts);
    }
    catch (err)
    {
        res.status(500).json({err});
    }
}

//show one controller code
async function showOne (req,res)
{

    try
    {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch (err)
    {
        res.status(404).json({err});
    }

}

//create a new post controller code
async function create (req,res)
{
    try
    {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    }
    catch
    {
        res.status(422).json({err})
    }
}

//Export it all  { } 's are needed.. I'm not sure why.
module.exports = { showAll, showOne, create };