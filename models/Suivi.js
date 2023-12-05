const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Suivi = sequelize.define(
  "Suivi",
  {
    logement_id: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
    utilisateur_id: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "suivi" }
);

module.exports = Suivi;
