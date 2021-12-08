const mongoose = require('mongoose');

const { Schema } = mongoose;

const tripSchema = new Schema({
    parks: {
        type: [Parks]
    }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;