const { Location, Accomodation } = require("../models");
const path = require("path");

const publicController = {
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
      const response = await Accomodation.findAll(
        //fais moi la jointure avec la table location pour recuperer departement avec l'id
        {
          include: [
            {
              model: Location,
              attributes: ["departement"],
            },
          ],
        }
      );
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
};

module.exports = publicController;
