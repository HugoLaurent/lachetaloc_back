const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const contact = sequelize.define(
  "contact",
  {
    contact_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "contact" }
);

module.exports = contact;
