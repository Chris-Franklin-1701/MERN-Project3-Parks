const mongoose = require('mongoose');

const { Schema } = mongoose;

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
        type: [EntrancePasses]
    }
});

const EntranceFees = mongoose.model('Entrance Fees', entranceFeesSchema);

module.exports = EntranceFees;