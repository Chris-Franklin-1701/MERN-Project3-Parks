const mongoose = require('mongoose');

const { Schema } = mongoose;

const imagesSchema = new Schema({
    credit: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    altText: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});


module.exports = imagesSchema;