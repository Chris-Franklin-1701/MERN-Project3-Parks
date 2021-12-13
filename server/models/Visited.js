const { Schema, model } = require("mongoose");

const visitedSchema = new Schema({
    parkId: {
        type: String,
        required: true
    }
})

const Visited = model('Visited', visitedSchema)
module.exports = Visited