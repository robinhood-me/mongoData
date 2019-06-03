const express = require('express');
const router = express.Router();
// IMPORT associated with export in ninja.js
const ninja = require('../models/ninja');

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
//    var ninja = new Ninja(req.body);
//    ninja.save();
//last two statements could be merged:
Ninja.create(req.body).then(function(ninja){
    req.send(ninja);
});
// ^this will send back a promise that at some
// point (asynchronously) we will get back the data.
// We handle this with the .then method.
// NOW WE TAKE OUT ALL THISv out.
//    res.send({
//        type: 'POST',
//        name: req.body.name,
//        rank: req.body.rank
//    });
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
