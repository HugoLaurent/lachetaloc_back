const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const follow = sequelize.define(
  "follow",
  {
    accomodation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "follow" }
);

module.exports = follow;
