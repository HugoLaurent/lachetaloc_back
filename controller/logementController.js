const Logement = require("../models/Logement");

const logementController = {
  getOneLogement: async (req, res) => {
    try {
      const response = await Logement.findByPk(req.params.id);
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  getAllLogement: async (req, res) => {
    try {
      const response = await Logement.findAll();
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  getLogementByUser: async (req, res) => {
    try {
      const response = await Logement.findAll({
        where: {
          utilisateur_id: req.params.utilisateur,
        },
      });
      if (response.length === 0 || typeof response === "undefined") {
        res
          .status(404)
          .json("Aucun logement occupé par cet utilisateur n'a été trouvé");
      } else {
        res.json(response);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  getLogementByRoom: async (req, res) => {
    try {
      const response = await Logement.findAll({
        where: {
          piece_id: req.params.piece,
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
  getLogementByLocalisation: async (req, res) => {
    try {
      const response = await Logement.findAll({
        where: {
          localisation_id: req.params.localisation,
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
};

module.exports = logementController;
