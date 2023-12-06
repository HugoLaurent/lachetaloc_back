const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const location = sequelize.define(
  "location",
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
  { timestamps: false, tableName: "location" }
);

module.exports = location;
