const Sequelize = require("sequelize");
const hostDb = process.env.DB_HOST;

const sequelize = new Sequelize("lachetaloc", "admin", "lachetaloc", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // Vous pouvez laisser ou désactiver les logs SQL en fonction de vos préférences
});

module.exports = sequelize;
