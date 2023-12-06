const location = require("./location");
const follow = require("./follow");
const user = require("./user");
const accomodation = require("./accomodation");
const notification = require("./notification");
const room = require("./room");

accomodation.belongsTo(location, {
  foreignKey: "location_id",
});
location.hasMany(accomodation, {
  foreignKey: "location_id",
});

accomodation.belongsTo(room, {
  foreignKey: "room_id",
});
room.hasMany(accomodation, {
  foreignKey: "room_id",
});

accomodation.belongsToMany(user, { through: follow });
user.belongsToMany(accomodation, { through: follow });

accomodation.belongsTo(user, {
  foreignKey: "user_id",
});

user.hasMany(accomodation, {
  foreignKey: "user_id",
});

user.hasMany(notification, {
  foreignKey: "user_id",
});
notification.belongsTo(user, {
  foreignKey: "user_id",
});

module.exports = {
  location,
  follow,
  user,
  accomodation,
  notification,
  room,
};
