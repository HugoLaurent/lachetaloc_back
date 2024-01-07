const Accommodation = require("./accommodation");
const Follow = require("./follow");
const Location = require("./location");
const Notification = require("./notification");
const Room = require("./room");
const User = require("./user");
const Contact = require("./contact");

// Relation entre Accommodation (Logement) et Location (Localisation)
Accommodation.belongsTo(Location, {
  foreignKey: "location_id",
});
Location.hasMany(Accommodation, {
  foreignKey: "location_id",
});

// Relation entre Accommodation (Logement) et Room (Chambre)
Accommodation.belongsTo(Room, {
  foreignKey: "room_id",
});
Room.hasMany(Accommodation, {
  foreignKey: "room_id",
});

// Relation entre User (Utilisateur) et Accommodation (Logement) à travers "follow"
User.belongsToMany(Accommodation, { through: "follow", foreignKey: "user_id" });
Accommodation.belongsToMany(User, {
  through: "follow",
  foreignKey: "accommodation_id",
});

// Relation entre Accommodation (Logement) et User (Utilisateur)
Accommodation.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Accommodation, {
  foreignKey: "user_id",
});

// Relation entre User (Utilisateur) et Notification
Notification.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Notification, {
  foreignKey: "user_id",
});

// Relation entre Notification et Accommodation (Logement)
// Notification.belongsTo(Accommodation, {
//   foreignKey: "accommodation_id",
// });
// Accommodation.hasMany(Notification, {
//   foreignKey: "accommodation_id",
// });

//fais la relation entre user et notification
User.hasMany(Notification, {
  foreignKey: "user_id",
});
Notification.belongsTo(User, {
  foreignKey: "user_id",
});

// Relation entre User (Utilisateur) et Contact
User.belongsToMany(User, {
  through: "contact",
  foreignKey: "user_id",
  as: "UserContacts",
});
User.belongsToMany(User, {
  through: "contact",
  foreignKey: "contact_id",
  as: "ContactUsers",
});

// Export des modèles
module.exports = {
  Location,
  Room,
  User,
  Accommodation,
  Follow,
  Notification,
  Contact,
};
