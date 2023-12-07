import { Accomodation, User, Location, Room } from "../models";

Accomodation.belongsTo(Location, {
  foreignKey: "location_id",
});
Location.hasMany(Accomodation, {
  foreignKey: "location_id",
});

Accomodation.belongsTo(Room, {
  foreignKey: "room_id",
});
Room.hasMany(Accomodation, {
  foreignKey: "room_id",
});

User.belongsToMany(Accomodation, { through: "follow", foreignKey: "user_id" });
Accomodation.belongsToMany(User, {
  through: "follow",
  foreignKey: "accomodation_id",
});

Accomodation.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Accomodation, {
  foreignKey: "user_id",
});

User.hasMany(Notification, {
  foreignKey: "user_id",
});
Notification.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  location,
  follow,
  user,
  Accomodation,
  notification,
  room,
};
