const { User } = require("../models");
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

    if (!user) {
      return res
        .status(401)
        .json({ error: "Vos identifiants ne sont pas correctes" });
    }

    const compareOk = await bcrypt.compare(password, user.dataValues.password);
    if (!compareOk) {
      return res
        .status(401)
        .json({ error: "Vos identifiants ne sont pas correctes" });
    }
    // Vérifie si l'utilisateur existe et si le mot de passe est correct
    if (user && compareOk) {
      // Génère un jeton d'accès
      const token = jwt.sign(
        {
          id: user.dataValues.id,
          pseudo: user.dataValues.pseudo,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
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
      return res.json({
        token,
        refreshToken,
        message: "Vous êtes authentifié!",
      });
    }
    // Si l'authentification échoue, renvoie un message d'erreur d'authentification
  },

  /**
   * Fonction asynchrone pour créer un nouvel utilisateur.
   * Vérifie les données fournies pour créer un utilisateur valide.
   */

  signIn: async (req, res) => {
    const user = req.body;
    if (user.pseudo === "") {
      res.status(422).json({
        code: 422,
        message: "Le pseudo est obligatoire",
      });
      return;
    }

    // Vérification de l'existence du pseudo
    const pseudoAlreadyExist = await User.findOne({
      where: {
        pseudo: user.pseudo,
      },
    });
    if (pseudoAlreadyExist) {
      res.status(409).json({
        code: 409,
        message: "Le pseudo existe déjà",
      });
      return;
    }

    // Vérification du format de l'email
    const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regexEmail.test(user.email)) {
      res.status(422).json({
        code: 422,
        message: "L'email n'est pas valide",
      });
      return;
    }

    // Vérification de la complexité du mot de passe
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{12,}$/;
    if (!regexPassword.test(user.password)) {
      res.status(422).json({
        code: 422,
        message:
          "Le mot de passe doit contenir au moins 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
      });
      return;
    }

    try {
      await User.create(user);
      res.json({ message: "Vous êtes inscrit !" });
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  refresh: (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = jwt.sign(
        { id: user.id, pseudo: user.pseudo },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      res.json({ accessToken });
    });
  },
};

module.exports = authController;
