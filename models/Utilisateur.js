const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Utilisateur = sequelize.define(
  "Utilisateur",
  {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pseudo: {
      type: datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: datatypes.STRING,
      allowNull: false,
    },
    password: {
      type: datatypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "utilisateur" }
);

module.exports = Utilisateur;
