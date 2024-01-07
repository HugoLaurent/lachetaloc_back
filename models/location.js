const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const accommodation = require("./accommodation");

const location = sequelize.define(
  "location",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    departement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "location" }
);

module.exports = location;
