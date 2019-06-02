const express = require('express');

// setup express app
const app = express();

# '/' makes the root the only route that will respond
app.get('/', function(req, res){
    console.log('GET request');
    res.end();
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
