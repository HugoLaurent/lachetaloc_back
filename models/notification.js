const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const notification = sequelize.define(
  "notification",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { timestamps: false, tableName: "notification" }
);

module.exports = notification;
