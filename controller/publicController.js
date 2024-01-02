const { Location, Accomodation } = require("../models");
const path = require("path");

const publicController = {
  /**
   * Fonction asynchrone pour récupérer une seule accommodation par son identifiant.
   */
  getAccomodation: async (req, res) => {
    try {
      const response = await Accomodation.findByPk(req.params.id, {
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
   * Récupere l'image et l'envoie au client.
   */
  sendImageToClient: async (req, res) => {
    const imagePath = path.join(__dirname, "../");
    const response = await Accomodation.findByPk(req.params.id);
    res.sendFile(imagePath + response.dataValues.picture);
  },
  /**
   * Fonction asynchrone pour récupérer une seule accommodation par son identifiant.
   */
  getOneAccomodation: async (req, res) => {
    try {
      const response = await Accomodation.findByPk(req.params.id);
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  /**
   * Fonction asynchrone pour récupérer toutes les accommodations.
   */
  getAllAccomodation: async (req, res) => {
    try {
      const response = await Accomodation.findAll({
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
   * Fonction asynchrone pour récupérer les accommodations par le nombre de pièces.
   */
  getAccomodationByRoom: async (req, res) => {
    try {
      const response = await Accomodation.findAll({
        where: {
          room_id: req.params.room,
        },
      });
      if (response.length === 0 || typeof response === "undefined") {
        res
          .status(404)
          .json(
            "Aucun logement avec le nombre de pièces demandé n'a été trouvé"
          );
      } else {
        res.json(response);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  /**
   * Fonction asynchrone pour récupérer les accommodations par l'identifiant de localisation.
   */
  getAccomodationByLocation: async (req, res) => {
    try {
      const response = await Accomodation.findAll({
        where: {
          location_id: req.params.location,
        },
      });
      if (response.length === 0 || typeof response === "undefined") {
        res
          .status(404)
          .json("Aucun logement dans la région demandée n'a été trouvé");
      } else {
        res.json(response);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  /**
   * Fonction asynchrone pour récupérer le departement d'une location.
   */
  getLocation: async (req, res) => {
    try {
      const response = await Accomodation.findByPk(req.params.id);
      if (response !== null) {
        const locationId = response.dataValues.location_id;
        const departement = await Location.findByPk(locationId);
        if (departement !== null) {
          console.log(departement.dataValues);
          return res.json({ location: departement.dataValues.departement });
        }
      }
      return res.status(404).json("Aucune location trouvée");
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  /**
   * Fonction asynchrone pour récupérer toutes les localisations.
   */
  getAllLocation: async (req, res) => {
    try {
      const response = await Location.findAll();
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
      const response = await User.create(user);
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = publicController;
