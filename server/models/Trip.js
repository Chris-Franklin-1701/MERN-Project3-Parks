const mongoose = require('mongoose');

const { Schema } = mongoose;

const tripSchema = new Schema({
    parks: {
        type: [Parks]
    }
});



module.exports = tripSchema;