const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    display_name: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    radius: {
        type: Number,
        required: true
    }});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;