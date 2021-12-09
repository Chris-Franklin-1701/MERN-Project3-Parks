const { connect, connection } = require('mongoose');
const { config } = require('dotenv');

module.exports = () => {
  config();
  const uri = process.env.DB_URI;

  connect(uri, {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
    .then(() => {
      console.log('Connection Established to parksForRec Database');
    })
    .catch(error => console.log(error.message));

  connection.on('connected', () => {
    console.log('Mongoose connected to DB Cluster');
  })

  connection.on('error', (error) => {
    console.error(error.message);
  })

  connection.on('disconnected', () => {
    console.log('Mongoose Disconnected');
  })
}