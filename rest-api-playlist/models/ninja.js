const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

//create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is requred']
    },
    rank: {
        type: String,
        required: false
    },
    available: {
        type: Boolean,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    // add in geolocation
    geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
