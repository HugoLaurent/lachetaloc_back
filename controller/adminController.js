const { Location, Accommodation, User } = require("../models");
const path = require("path");
const multer = require("multer");

// Configuration du stockage pour Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/pictures"); // Répertoire de destination pour les images d'accommodation
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single("picture");

const adminController = {
  /**
   * Fonction asynchrone pour supprimer une accommodation.
   * @param {number} id - L'id de l'accommodation
   * @param {number} user_id - L'id de l'utilisateur qui a créé l'accommodation
   */
  deleteAccommodation: async (req, res) => {
    try {
      const accommodation = await Accommodation.findByPk(req.params.id);

      await accommodation.update({
        user_id: null,
      });
      res.json("Votre loc a bien été supprimé");
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  /**
   * Fonction pour creer une accommodation.
   * @param {string} title - Le titre de l'accommodation
   * @param {string} description - La description de l'accommodation
   * @param {number} price - Le prix de l'accommodation
   * @param {date} end_of_contract - La date de fin du contrat de l'accommodation
   * @param {number} location_id - L'id de la localisation de l'accommodation
   * @param {number} room_id - L'id du nombre de pièces de l'accommodation
   * @param {number} user_id - L'id de l'utilisateur qui a créé l'accommodation
   * @param {string} picture - Le chemin de l'image de l'accommodation
   */
  createAccommodation: async (req, res) => {
    const alradyPosted = await Accommodation.findAll({
      where: {
        user_id: +req.params.user_id,
      },
    });
    if (alradyPosted.length >= 1) {
      return res.status(403).json("Cet utilisateur a déjà posté une annonce");
    }
    if (req.user)
      upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
          // Une erreur Multer s'est produite lors du téléchargement
          return res.status(500).json(err);
        } else if (err) {
          // Une erreur inattendue s'est produite lors du téléchargement
          return res
            .status(500)
            .json(
              "Une erreur inattendue s'est produite lors du téléchargement"
            );
        }

        if (
          !req.body.title ||
          !req.body.description ||
          !req.body.price ||
          !req.body.end_of_contract ||
          !req.body.location_id ||
          !req.body.room_id
        ) {
          return res.status(400).json("Veuillez remplir tous les champs");
        }

        if (
          typeof req.body.title !== "string" ||
          req.body.title.length < 2 ||
          req.body.title.length > 20
        ) {
          return res

            .status(400)
            .json(
              "Le titre doit être une chaine de caractère et contenir entre 2 et 20 caractères"
            );
        }

        if (
          typeof req.body.description !== "string" ||
          req.body.description.length < 50 ||
          req.body.description.length > 200
        ) {
          return res

            .status(400)
            .json(
              "La description doit être une chaine de caractère et contenir entre 50 et 200 caractères"
            );
        }

        if (isNaN(req.body.price)) {
          return res.status(400).json("Le prix doit être un nombre");
        }

        if (isNaN(Date.parse(req.body.end_of_contract))) {
          return res.status(400).json("La date doit être une date");
        }

        if (isNaN(req.body.room_id)) {
          return res
            .status(400)
            .json("Le nombre de pièces doit être un nombre");
        }

        if (isNaN(req.body.location_id)) {
          return res.status(400).json("L'id de la région doit être un nombre");
        }

        const imagePath = req.file ? req.file.path : null;

        try {
          const accommodation = await Accommodation.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            end_of_contract: req.body.end_of_contract,
            location_id: req.body.location_id,
            room_id: req.body.room_id,
            user_id: +req.params.user_id,
            picture: imagePath,
          });

          res.json(accommodation);
        } catch (error) {
          console.trace(error);
          res.status(500).json(error);
        }
      });
  },
  /**
   * Fonction asynchrone pour modifier les infos d'une location.
   */
  updateAccommodation: async (req, res) => {
    const elementToChange = await Location.findByPk(req.params.id);
    if (!elementToChange) {
      return res.status(404).json("Cette localisation n'existe pas");
    }
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        // Une erreur Multer s'est produite lors du téléchargement
        return res.status(500).json(err);
      } else if (err) {
        // Une erreur inattendue s'est produite lors du téléchargement
        return res
          .status(500)
          .json("Une erreur inattendue s'est produite lors du téléchargement");
      }

      const imagePath = req.file ? req.file.path : null;

      try {
        const updateData = {};

        if (req.body.title) {
          if (
            typeof req.body.title !== "string" ||
            req.body.title.length < 2 ||
            req.body.title.length > 20
          ) {
            return res
              .status(400)
              .json(
                "Le titre doit être une chaîne de caractères et contenir entre 2 et 20 caractères"
              );
          }
          updateData.title = req.body.title;
        }

        if (req.body.description) {
          if (
            typeof req.body.description !== "string" ||
            req.body.description.length < 50 ||
            req.body.description.length > 200
          ) {
            return res
              .status(400)
              .json(
                "La description doit être une chaîne de caractères et contenir entre 50 et 200 caractères"
              );
          }
          updateData.description = req.body.description;
        }

        if (req.body.price) {
          if (isNaN(req.body.price)) {
            return res.status(400).json("Le prix doit être un nombre");
          }
          updateData.price = req.body.price;
        }

        if (req.body.end_of_contract) {
          if (isNaN(Date.parse(req.body.end_of_contract))) {
            return res.status(400).json("La date doit être une date");
          }
          updateData.end_of_contract = req.body.end_of_contract;
        }

        if (req.body.room_id) {
          if (isNaN(req.body.room_id)) {
            return res
              .status(400)
              .json("Le nombre de pièces doit être un nombre");
          }
          updateData.room_id = req.body.room_id;
        }

        if (req.body.location_id) {
          if (isNaN(req.body.location_id)) {
            return res
              .status(400)
              .json("L'id de la région doit être un nombre");
          }
          updateData.location_id = req.body.location_id;
        }

        if (imagePath) {
          updateData.picture = imagePath;
        }

        await Accommodation.update(updateData, {
          where: { id: req.params.id },
        });

        res.json({ message: "Votre logement a bien été modifié" });
      } catch (error) {
        console.trace(error);
        res.status(500).json(error);
      }
    });
  },

  /**
   * Fonction asynchrone pour récupérer tous les utilisateurs.
   */
  getAllUsers: async (req, res) => {
    try {
      const response = await User.findAll();
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  /**
   * Fonction asynchrone pour supprimer un utilisateur par son identifiant.
   */ deleteUser: async (req, res) => {
    try {
      const response = await User.findByPk(req.params.id);
      await response.destroy();
      res.json("User deleted");
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  /**
   * Fonction asynchrone pour changer les infos d'un utilisateur par son identifiant.
   */

  updateUser: async (req, res) => {
    try {
      const response = await User.findByPk(req.params.id);
      if (!response) {
        return res.status(404).json("Utilisateur non trouvé");
      }

      //verifie si l'email est valide
      if (req.body.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(req.body.email)) {
          return res.status(400).json("L'email n'est pas valide");
        }
      }
      if (req.body.password) {
        const regexPassword =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{12,}$/;
        if (!regexPassword.test(req.body.password)) {
          res.status(422).json({
            code: 422,
            message:
              "Le mot de passe doit contenir au moins 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
          });
          return;
        }
      }

      await response.update(req.body);
      res.json({ message: "Utilisateur modifié" });
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = adminController;
