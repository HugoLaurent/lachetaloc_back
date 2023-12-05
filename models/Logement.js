const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Logement = sequelize.define(
  "Logement",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bail: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    prix: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    piece_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    utilisateur_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    localisation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "logement" }
);

module.exports = Logement;
