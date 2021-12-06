const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

//Middlewares
//app.use('/posts', ()=>{
    //console.log("Your first ever middleware");
//});

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.get('/', (req, res) =>{
    res.send("Your first fucking nodejs route!!!");
});
//connect to mongodb
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, ()=> console.log('Connected'));
// this is the port the server will be listening to
app.listen(3000);