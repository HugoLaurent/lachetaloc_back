const Sequelize = require("sequelize");
const hostDb = process.env.DB_HOST;

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,

  {
    host: hostDb,
    dialect: "postgres",
    port: 5432,
  }
);

module.exports = sequelize;
