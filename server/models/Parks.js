const mongoose = require('mongoose');

const { Schema } = mongoose;

const parksSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  parkCode: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  activities: {
    type: [Activities]
  },
  topics: {
    type: [Topics]
  },
  states: {
    type: [String]
  },
  phoneNumber: {
    type: String
  },
  entranceFees: {
    type: [EntranceFees]
  },
  postalCode: {
    type: Number
  },
  city: {
    type: String
  },
  stateCode: {
    type: String
  },
  line1: {
    type: String
  },
  line2: {
    type: String
  },
  images: {
    type: [Images]
  }
});

const Park = mongoose.model('State', parksSchema);

module.exports = Park;
