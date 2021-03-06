const express = require('express');
const router = express.Router();
// allows the rest of the functions in the file
// to be exposed to the NodeJS app
exports = module.exports = router;


// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
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
