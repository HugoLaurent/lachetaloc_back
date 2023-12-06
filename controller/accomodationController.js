const accomodation = require("../models/accomodation");

const accomodationController = {
  getOneAccomodation: async (req, res) => {
    try {
      const response = await accomodation.findByPk(req.params.id);
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  getAllAccomodation: async (req, res) => {
    try {
      const response = await accomodation.findAll();
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  getAccomodationByUser: async (req, res) => {
    try {
      const response = await accomodation.findAll({
        where: {
          user_id: req.params.user,
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
  getAccomodationByRoom: async (req, res) => {
    try {
      const response = await accomodation.findAll({
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
  getAccomodationByLocation: async (req, res) => {
    try {
      const response = await accomodation.findAll({
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
};

module.exports = accomodationController;
