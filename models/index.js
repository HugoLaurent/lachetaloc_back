import { Accomodation, User, Location, Room } from "../models";

// Relation entre Accomodation (Logement) et Location (Localisation)
Accomodation.belongsTo(Location, {
  foreignKey: "location_id",
});
Location.hasMany(Accomodation, {
  foreignKey: "location_id",
});

// Relation entre Accomodation (Logement) et Room (Chambre)
Accomodation.belongsTo(Room, {
  foreignKey: "room_id",
});
Room.hasMany(Accomodation, {
  foreignKey: "room_id",
});

// Relation entre User (Utilisateur) et Accomodation (Logement) à travers "follow"
User.belongsToMany(Accomodation, { through: "follow", foreignKey: "user_id" });
Accomodation.belongsToMany(User, {
  through: "follow",
  foreignKey: "accomodation_id",
});

// Relation entre Accomodation (Logement) et User (Utilisateur)
Accomodation.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Accomodation, {
  foreignKey: "user_id",
});

// Relation entre User (Utilisateur) et Notification
Notification.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Notification, {
  foreignKey: "user_id",
});

// Relation entre Notification et Accomodation (Logement)
Notification.belongsTo(Accomodation, {
  foreignKey: "accomodation_id",
});
Accomodation.hasMany(Notification, {
  foreignKey: "accomodation_id",
});

//fais la relation entre user et notification
User.hasMany(Notification, {
  foreignKey: "user_id",
});
Notification.belongsTo(User, {
  foreignKey: "user_id",
});

// Export des modèles
module.exports = {
  Location,
  Room,
  User,
  Accomodation,
  Notification,
};
