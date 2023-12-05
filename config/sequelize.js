const Sequelize = require("sequelize");

const sequelize = new Sequelize("lachetaloc", "admin", "libranga", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;
