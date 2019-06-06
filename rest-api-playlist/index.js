// This is our APP setup file,
// we need a way to export the routes to be used here

const express = require('express');
// const router = express.Router();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


// const ninja = require('ninja');
// import routes from api.js into here
const routes = require('./routes/api');

//setup express app
const app = express();

//Name of DB, ninjago, doesn't have to exist, it will create it.
mongoose.connect('mongodb://localhost:27017/ninjago');
//override mongoose.Promise since deprecated
mongoose.Promise = global.Promise;

//1st stage middleware to serve static content
app.use(express.static('public'));

// add middleware body-bodyParser
// bodyParser can handle diff formats so specify .json
app.use(bodyParser.json());

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message});
})

// app.use(routes);

//initialize routes, we were using this route (/api), but now,
// we are using the routes ^ imported from the other file (/ninjas)
// Here we require the file and *use* it inside /api.
// USE is the middleware - code that runs between request and response
// code -> app.use('/api', require('./routes/api'))
// if we still want to use /api, we add it as 1st param
app.use('/api', routes);

// app.use(ninja);

//listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests from routes file');
});

//
