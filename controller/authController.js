const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {
  /**
   * Authentifie l'utilisateur en vérifiant les informations de connexion (pseudo et mot de passe).
   * Génère un jeton d'accès et un jeton de rafraîchissement pour l'utilisateur valide.
   */

  login: async (req, res) => {
    const { pseudo, password } = req.body;

    // Vérifie si l'utilisateur existe dans la base de données
    const user = await User.findOne({
      where: {
        pseudo,
      },
    });

    // Vérifie si l'utilisateur existe et si le mot de passe est correct
    if (user && bcrypt.compare(password, user.dataValues.password)) {
      // Génère un jeton d'accès
      const token = jwt.sign(
        {
          id: user.dataValues.id,
          pseudo: user.dataValues.pseudo,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      // Génère un jeton de rafraîchissement
      const refreshToken = jwt.sign(
        {
          id: user.dataValues.id,
          pseudo: user.dataValues.pseudo,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
      );

      console.log(token);
      // Renvoie les jetons d'authentification
      return { token, refreshToken };
    } else {
      // Si l'authentification échoue, renvoie un message d'erreur d'authentification
      return { error: "Invalid Credentials" };
    }
  },
};

module.exports = authController;
