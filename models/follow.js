const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const follow = sequelize.define(
  "follow",
  {
    accomodation_id: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "follow" }
);

module.exports = follow;
