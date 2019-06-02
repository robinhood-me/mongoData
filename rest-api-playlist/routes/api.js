const express = require('express');
const router = express.Router();
// allows the rest of the functions in the file
// to be exposed to the NodeJS app
// see below for exporting of router routes

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
    console.log('GET request you sweet piece of ass');
    res.send({type: 'GET'});
});

// add a new ninja to the db
router.post('/ninjas', function(req, res){
    res.send({type: 'POST'});
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a ninja in the db
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});
//exports = module.exports = router;
module.exports = router;

// 
