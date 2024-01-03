const { Accomodation } = require("../models");
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

const accomodationController = {
  createAccomodation: async (req, res) => {
    const alradyPosted = Accomodation.findAll({
      where: {
        user_id: req.user.id,
      },
    });
    if (alradyPosted) {
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

        if (isNaN(req.body.room_id)) {
          return res
            .status(400)
            .json("Le nombre de pièces doit être un nombre");
        }

        if (isNaN(req.body.location_id)) {
          return res.status(400).json("L'id de la région doit être un nombre");
        }

        try {
          const imagePath = req.file ? req.file.path : null; // Récupération du chemin de l'image

          const accomodation = await Accomodation.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            end_of_contract: req.body.end_of_contract,
            location_id: req.body.location_id,
            room_id: req.body.room_id,
            user_id: req.user.id,
            picture: imagePath, // Assignation du chemin de l'image à la propriété picture de l'accommodation
          });

          res.json(accomodation);
        } catch (error) {
          console.trace(error);
          res.status(500).json(error);
        }
      });
  },
  getOneAccomodation: async (req, res) => {
    try {
      const response = await Accomodation.findByPk(req.params.id);
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  deleteAccomodation: async (req, res) => {
    console.log(req.user.id);
    try {
      const accomodation = await Accomodation.findByPk(req.params.id);
      if (accomodation.user_id === req.user.id) {
        await accomodation.update({
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
};

module.exports = accomodationController;
