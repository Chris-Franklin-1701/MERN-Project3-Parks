const { Schema } = require("mongoose");

const activitiesSchema = require("./Activities");
const topicsSchema = require("./Topics");
const imagesSchema = require("./Images");
const entranceFeesSchema = require("./EntranceFees");

const parksSchema = new Schema({
  url: {
    type: String,
  },
  fullName: {
    type: String,
  },
  parkCode: {
    type: String,
  },
  description: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  activities: [activitiesSchema],
  topics: [topicsSchema],
  states: [
    {
      type: String,
    },
  ],
  phoneNumber: {
    type: String,
  },
  entranceFees: [entranceFeesSchema],
  postalCode: {
    type: Number,
  },
  city: {
    type: String,
  },
  stateCode: {
    type: String,
  },
  line1: {
    type: String,
  },
  line2: {
    type: String,
  },
  line3: {
    type: String,
  },
  images: [imagesSchema],
});

module.exports = parksSchema;
