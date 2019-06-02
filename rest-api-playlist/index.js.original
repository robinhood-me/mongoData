const express = require('express');

// setup express app
const app = express();

// '/' makes the root the only route that will respond
// app.get('/', function(req, res){
app.get('/api', function(req, res){

    console.log('GET request');
    // res.end();
    res.send({ name: 'Robin Hood'});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
