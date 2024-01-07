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

  deleteAnUser: async (req, res) => {
    try {
      const response = await User.findByPk(req.user.id);
      await response.destroy();
      res.json("User deleted");
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  updateUser: async (req, res) => {
    try {
      const response = await User.findByPk(req.user.id);
      if (!response) {
        return res.status(404).json("Utilisateur non trouvé");
      }

      //verifie si l'email est valide
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (req.body.email) {
        if (!emailRegex.test(req.body.email)) {
          return res.status(400).json("L'email n'est pas valide");
        }
      }
      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{12,}$/;
      if (req.body.password) {
        if (!regexPassword.test(req.body.password)) {
          res.status(422).json({
            code: 422,
            message:
              "Le mot de passe doit contenir au moins 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
          });
          return;
        }
      }

      await response.update(
        {
          pseudo: req.body.pseudo,
          email: req.body.email,
          password: req.body.password,
        },
        {
          where: {
            id: req.user.id,
          },
        }
      );

      res.json({ message: "Utilisateur modifié" });
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
