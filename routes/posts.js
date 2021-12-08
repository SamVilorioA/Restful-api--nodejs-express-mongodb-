const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Routes
router.get('/', (req, res) =>{
    res.send("Your first f'ing posts route!!!");
});
router.get('/singlePost', (req, res) =>{
    res.send("Your first single post!!!");
});
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