const { User } = require("../models");
const bcrypt = require("bcrypt");
const { response } = require("express");
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

      console.log(token, refreshToken);
      // Renvoie les jetons d'authentification
      return res.json({ token, refreshToken });
    }
    // Si l'authentification échoue, renvoie un message d'erreur d'authentification
    return res.status(401).json({ error: "Invalid Credentials" });
  },
  refresh: (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.sendStatus(401);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = jwt.sign(
        { id: user.id, pseudo: user.pseudo },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      res.json({ accessToken });
    });
  },
};

module.exports = authController;
