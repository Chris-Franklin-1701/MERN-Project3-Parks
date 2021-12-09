const mongoose = require('mongoose');

const { Schema } = mongoose;

const visitedParksSchema = new Schema({
    parks: {
        type: [Parks]
    }
});


module.exports = visitedParksSchema;