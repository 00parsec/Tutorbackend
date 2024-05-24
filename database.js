const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DBPORT,
  dialect: 'postgres'
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
});

module.exports = { sequelize };
