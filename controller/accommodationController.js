const { Accommodation, Location } = require("../models");
const multer = require("multer");
const path = require("path");
const user = require("../models/user");

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

const accommodationController = {
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
        user_id: req.user.id,
      },
    });
    if (alradyPosted.length >= 1) {
      return res.status(403).json("Vous avez déjà posté une annonce");
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

        const today = new Date();
        if (Date.parse(req.body.end_of_contract) < today) {
          return res
            .status(400)
            .json("La date doit être supérieure à aujourd'hui");
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
            user_id: req.user.id,
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
   * Fonction asynchrone pour récupérer une seule accommodation par son identifiant.
   * @param {number} id - L'id de l'accommodation
   */
  getAccommodation: async (req, res) => {
    try {
      const response = await Accommodation.findByPk(req.params.id, {
        include: [
          {
            model: Location,
            attributes: ["departement"],
          },
        ],
      });

      if (response !== null) {
        return res.json(response);
      }
      return res.status(404).json("Aucun logement trouvé");
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  /**
   * Fonction asynchrone pour récupérer toutes les accommodations.
   */
  getAllAccommodation: async (req, res) => {
    try {
      const response = await Accommodation.findAll({
        include: [
          {
            model: Location,
            attributes: ["departement"],
          },
        ],
      });
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  /**
   * Fonction asynchrone pour supprimer une accommodation.
   * @param {number} user_id - L'id de l'utilisateur qui a créé l'accommodation
   */
  deleteAccommodation: async (req, res) => {
    try {
      const accommodation = await Accommodation.findByPk(req.params.id);
      if (req.user.id !== accommodation.user_id) {
        return res
          .status(403)
          .json("Vous n'êtes pas autorisé à effectuer cette action");
      }
      if (accommodation.user_id === req.user.id) {
        await accommodation.update({
          user_id: null,
        });
        res.json("Votre loc a bien été supprimé");
      } else {
        res
          .status(403)
          .json("Vous n'êtes pas autorisé à effectuer cette action");
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  /**
   * Récupere l'image et l'envoie au client.
   */
  sendImageToClient: async (req, res) => {
    const imagePath = path.join(__dirname, "../");
    const response = await Accommodation.findByPk(req.params.id);
    if (!response) {
      return res.status(404).json("Cette image n'existe pas");
    }
    console.log(imagePath + response);
    res.sendFile(imagePath + response.dataValues.picture);
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
};

module.exports = accommodationController;
