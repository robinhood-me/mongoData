// This is our APP setup file,
// we need a way to export the routes to be used here

const express = require('express');
// const router = express.Router();
// import routes from api.js into here
const routes = require('./routes/api');

//setup express app
const app = express();

// app.use(routes);

//initialize routes, we were using this route (/api), but now,
// we are using the routes ^ imported from the other file (/ninjas)
// Here we require the file and *use* it inside /api.
// USE is the middleware - code that runs between request and response
// code -> app.use('/api', require('./routes/api'))

// if we still want to use /api, we add it as 1st param
app.use('/api', routes);

//listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests from routes file');
});

//
