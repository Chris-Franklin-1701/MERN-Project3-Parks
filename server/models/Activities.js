const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitiesSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        default: new Schema.Types.ObjectId()
    },
    name: {
        type: String,
        required: true
    }
});


module.exports = activitiesSchema;