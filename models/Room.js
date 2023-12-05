const { datatypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Room = sequelize.define("Room", {
  id: {
    type: datatypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  prix: {
    type: datatypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Room;
