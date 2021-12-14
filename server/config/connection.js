const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/parks_db`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

//mongoose.connect(process.env.MONGODB_URI || `mongodb://${process.env.REACT_APP_HOST}/${process.env.REACT_APP_NAME}