const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitiesSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Activity = mongoose.model('Activity', activitiesSchema);

module.exports = Activity;