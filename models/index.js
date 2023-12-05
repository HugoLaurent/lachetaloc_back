const Localisation = require("./Localisation");
const Suivi = require("./Suivi");
const Utilisateur = require("./Utilisateur");
const Logement = require("./Logement");
const Notification = require("./Notification");
const Piece = require("./Piece");

// Relation entre les tables

Logement.belongsTo(Localisation, {
  foreignKey: "localisation_id",
});
Localisation.hasMany(Logement, {
  foreignKey: "localisation_id",
});

Logement.belongsTo(Piece, {
  foreignKey: "piece_id",
});
Piece.hasMany(Logement, {
  foreignKey: "piece_id",
});

Logement.belongsToMany(Utilisateur, { through: Suivi });
Utilisateur.belongsToMany(Logement, { through: Suivi });

Logement.belongsTo(Utilisateur, {
  foreignKey: "utilisateur_id",
});

Utilisateur.hasMany(Logement, {
  foreignKey: "utilisateur_id",
});

Utilisateur.hasMany(Notification, {
  foreignKey: "utilisateur_id",
});
Notification.belongsTo(Utilisateur, {
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
