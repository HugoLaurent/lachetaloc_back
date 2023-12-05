const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Localisation = sequelize.define(
  "Localisation",
  {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    departement: {
      type: datatypes.STRING,
      allowNull: false,
    },
    code: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "localisation" }
);

module.exports = Localisation;
