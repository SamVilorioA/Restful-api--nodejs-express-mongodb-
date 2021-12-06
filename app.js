const express = require('express');

const app = express();

//Middlewares
app.use('/posts', ()=>{
    //console.log("Your first ever middleware");
});

//Routes
app.get('/', (req, res) =>{
    res.send("Your first fucking nodejs route!!!");
});



app.get('/posts', (req, res) =>{
    res.send("Your first fucking posts route!!!");
});

// this is the port the server will be listening to
app.listen(3000);