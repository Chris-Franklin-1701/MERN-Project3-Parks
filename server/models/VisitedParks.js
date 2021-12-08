const mongoose = require('mongoose');

const { Schema } = mongoose;

const visitedParksSchema = new Schema({
    parks: {
        type: [Parks]
    }
});

const VisitedPark = mongoose.model('Visited Park', visitedParksSchema);

module.exports = VisitedPark;