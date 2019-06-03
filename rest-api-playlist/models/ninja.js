const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
    // add in geolocation
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
