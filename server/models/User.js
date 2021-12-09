const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    visitedParks: {
        type: [VisitedParks]
    },
    trip: {
        type: [TripParks]
    }
});

module.exports = userSchema;