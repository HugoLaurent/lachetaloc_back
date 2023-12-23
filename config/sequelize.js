const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_HOST,
  {
    host: DB_HOST,
    dialect: "postgres",
    port: 5432,
  }
);

module.exports = sequelize;
