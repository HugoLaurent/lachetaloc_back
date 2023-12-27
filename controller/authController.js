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
    console.log(pseudo, password);

    // Vérifie si l'utilisateur existe dans la base de données
    const user = await User.findOne({
      where: {
        pseudo,
      },
    });

    console.log(user);
    console.log(password);
    const compareOk = await bcrypt.compare(password, user.dataValues.password);

    // Vérifie si l'utilisateur existe et si le mot de passe est correct
    if (user && compareOk) {
      // Génère un jeton d'accès
      const token = jwt.sign(
        {
          id: user.dataValues.id,
          pseudo: user.dataValues.pseudo,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "24h" }
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
    if (!user)
      return res.status(401).json({ error: "L'utilisateur n'existe pas" });
    if (!compareOk)
      return res.status(401).json({ error: "Mot de passe invalide" });
  },
  refresh: (req, res) => {
    const refreshToken = req.body.refreshToken;
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
