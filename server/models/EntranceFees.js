const { Schema } = require('mongoose');;

const entrancePassesSchema = require('./EntrancePasses');

const entranceFeesSchema = new Schema({
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
    },
    entrancePasses: {
        type: [entrancePassesSchema]
    }
});


module.exports = entranceFeesSchema;