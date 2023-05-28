// Initializing required packages
// const Sequelize = require('sequelize');
// require('dotenv').config();

// Setting up info to be pulled from .env file for secure server login
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );

// Exporting file
// module.exports = sequelize;

// --------------------------------------------------------------------------------- //

// Info for Heroku deployment via clearDB
module.exports = {
  HOST: "us-cdbr-east-06.cleardb.net",
  USER: "b4e45312be1e82",
  PASSWORD: "660dc92b",
  DB: "heroku_8b70ae66cd5dbf3"
};
