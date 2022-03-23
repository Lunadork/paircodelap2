const Post = require('../models/post');

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

async function create (req,res)
{
    try
    {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    }
    catch
    {
        res.status(422).json({err});
    }
}


module.exports = { showAll, showOne, create };