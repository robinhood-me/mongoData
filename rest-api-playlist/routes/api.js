const express = require('express');
const router = express.Router();
// IMPORT associated with export in ninja.js
const Ninja = require('../models/ninja');

// allows the rest of the functions in the file
// to be exposed to the NodeJS app
// see below for exporting of router routes

// get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
    Ninja.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(ninjas){
        res.send(ninjas);
    });
});

// add a new ninja to the db
router.post('/ninjas', function(req, res, next){
//    var ninja = new Ninja(req.body);
//    ninja.save();
//last two statements could be merged:
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
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
router.put('/ninjas/:id', function(req, res, next){
    //console.log(req.params.id);
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        })
    });
});

// delete a ninja in the db
router.delete('/ninjas/:id', function(req, res, next){
    console.log(req.params.id);
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
    //res.send({type: 'DELETE'});
    //res.send(params.id)
});
//exports = module.exports = router;
module.exports = router;

//
