// Initializing required packages
const Sequelize = require('sequelize');
require('dotenv').config();

// Setting up info to be pulled from .env file for secure server login
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

// Exporting file
module.exports = sequelize;
