const mongoose = require('mongoose');

const { Schema } = mongoose;

const entrancePassesSchema = new Schema({
    cost: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    }
});


module.exports = entrancePassesSchema;