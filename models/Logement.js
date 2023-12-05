const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Logement = sequelize.define(
  "Logement",
  {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titre: {
      type: datatypes.STRING,
      allowNull: false,
    },
    bail: {
      type: datatypes.DATE,
      allowNull: false,
    },
    prix: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: datatypes.STRING,
      allowNull: false,
    },
    photo: {
      type: datatypes.STRING,
      allowNull: true,
    },
    piece_id: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
    utilisateur_id: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
    localisation_id: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "logement",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Logement;
