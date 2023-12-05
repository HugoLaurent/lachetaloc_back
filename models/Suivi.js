const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Suivi = sequelize.define("Suivi", {
  logement_id: {
    type: datatypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: datatypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Suivi;
