const { Schema, model, Types } = require('mongoose');;
const bcrypt = require('bcrypt');

const parksSchema = require("./Parks");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },

    visitedParks: {
        type: [parksSchema]
    },

    saveVisited: [
      {
        type: Types.ObjectId,
        ref: 'Visited'
      }
    ]
    // trip: {
    //     type: [TripParks]
    // }
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;