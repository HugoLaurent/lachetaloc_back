const jwt = require("jsonwebtoken");
const { User } = require("../../models");

async function isAdmin(req, res, next) {
  const user = await User.findByPk(req.user.id);
  if (user.role_id === 2) {
    next();
  } else {
    res
      .status(403)
      .json({ message: "Vous n'avez pas les droits nécessaires." });
  }
}

module.exports = isAdmin;
