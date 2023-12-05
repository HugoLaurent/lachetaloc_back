const Localisation = require("./Localisation");
const Suivi = require("./Suivi");
const Utilisateur = require("./Utilisateur");
const Logement = require("./Logement");
const Notification = require("./Notification");
const Piece = require("./Piece");

// Relation entre les tables

Logement.hasOne(Localisation, {
  foreignKey: "logement_id",
});
Logement.hasOne(Piece, {
  foreignKey: "logement_id",
});
Logement.hasMany(Suivi, {
  foreignKey: "logement_id",
});
Logement.hasOne(Utilisateur, {
  foreignKey: "utilisateur_id",
});

Utilisateur.hasMany(Suivi, {
  foreignKey: "utilisateur_id",
});

Utilisateur.hasMany(Notification, {
  foreignKey: "utilisateur_id",
});

module.exports = {
  Localisation,
  Suivi,
  Utilisateur,
  Logement,
  Notification,
  Piece,
};
