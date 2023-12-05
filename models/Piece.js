const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Piece = sequelize.define(
  "Piece",
  {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    prix: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "piece" }
);

module.exports = Piece;
