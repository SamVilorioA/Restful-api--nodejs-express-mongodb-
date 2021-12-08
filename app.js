const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());
//app.use('/posts', ()=>{
    //console.log("Your first ever middleware");
//});

//import routes
const postsRoute = require('./routes/posts');

//this is a middleware
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) =>{
    res.send("Your first fucking nodejs route!!!");
});
//connect to mongodb
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log('Connected'));

// this is the port the server will be listening to
app.listen(3000);


//const uri = "mongodb+srv://m001-student:<password>@restcluster.jev9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
