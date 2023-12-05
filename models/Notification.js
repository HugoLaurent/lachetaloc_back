const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Notification = sequelize.define(
  "Notification",
  {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titre: {
      type: datatypes.STRING,
      allowNull: false,
    },
    description: {
      type: datatypes.STRING,
      allowNull: false,
    },
    lu: {
      type: datatypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    utilisateur_id: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Notification",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Notification;
