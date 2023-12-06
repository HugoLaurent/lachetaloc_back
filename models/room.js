const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const room = sequelize.define(
  "room",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    room: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "room" }
);

module.exports = room;
