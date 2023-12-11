const { User } = require("../models");

const userController = {
  /**
   * Fonction asynchrone pour récupérer un utilisateur par son identifiant.
   */

  getAnUser: async (req, res) => {
    try {
      const response = await User.findByPk(req.params.id);
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  /**
   * Fonction asynchrone pour récupérer tous les utilisateurs.
   */

  getAllUser: async (req, res) => {
    try {
      const response = await User.findAll();
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  /**
   * Fonction asynchrone pour créer un nouvel utilisateur.
   * Vérifie les données fournies pour créer un utilisateur valide.
   */

  createAnUser: async (req, res) => {
    const user = req.body;
    if (user.pseudo === "") {
      res.status(422).json({
        code: 422,
        message: "The pseudo is empty",
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
        message: "The pseudo already exists",
      });
      return;
    }

    // Vérification du format de l'email
    const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regexEmail.test(user.email)) {
      res.status(422).json({
        code: 422,
        message: "The email is not valid",
      });
      return;
    }

    // Vérification de la complexité du mot de passe
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{12,}$/;
    if (!regexPassword.test(user.password)) {
      res.status(422).json({
        code: 422,
        message:
          "Password must contain at least 12 characters, one uppercase letter, one lowercase letter, and one number",
      });
      return;
    }

    try {
      const response = await User.create(user);
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  /**
   * Fonction asynchrone pour supprimer un utilisateur par son identifiant.
   */

  deleteAnUser: async (req, res) => {
    try {
      const response = await User.findByPk(req.params.id);
      await response.destroy();
      res.json("User deleted");
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
