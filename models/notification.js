const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const notification = sequelize.define(
  "notification",
  {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: datatypes.STRING,
      allowNull: false,
    },
    description: {
      type: datatypes.STRING,
      allowNull: false,
    },
    read: {
      type: datatypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    user: {
      type: datatypes.INTEGER,
      allowNull: true,
    },
  },
  { timestamps: false, tableName: "notification" }
);

module.exports = notification;
