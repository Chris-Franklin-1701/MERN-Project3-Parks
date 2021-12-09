const mongoose = require('mongoose');

const { Schema } = mongoose;

const topicsSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});


module.exports = topicsSchema;