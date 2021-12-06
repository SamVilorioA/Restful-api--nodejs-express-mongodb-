const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res) =>{
    res.send("Your first f'ing posts route!!!");
});
router.get('/singlePost', (req, res) =>{
    res.send("Your first single post!!!");
});
//for this to work you got to export the router so that you can use the router module somewhere else in your app
module.exports = router;