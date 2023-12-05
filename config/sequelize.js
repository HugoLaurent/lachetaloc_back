const Sequelize = require("sequelize");

const sequelize = new Sequelize("lachetaloc", "admin", "lachetaloc", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;
