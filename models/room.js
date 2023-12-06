const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const room = sequelize.define(
  "room",
  {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    room: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "room" }
);

module.exports = room;
