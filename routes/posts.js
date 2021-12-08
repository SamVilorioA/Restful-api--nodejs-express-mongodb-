const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Routes
//get all the posts
router.get('/', async (req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

//get a specific post
router.get('/:postId', async (req, res) =>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

//delete a post
router.delete('/:postId', async (req, res) =>{
    try{
        const removedPost = await Post.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});

//save a post
router.post('/', async (req, res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
    }catch(err){
        res.json({message: err});
    }
});
//for this to work you got to export the router so that you can use the router module somewhere else in your app
module.exports = router;