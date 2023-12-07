const Accomodation = require("../models/accomodation");

const accomodationController = {
  createAccomodation: async (req, res) => {
    //Verifie si l'utilisateur est bien connecté
    const { title, description, price, rooms, location_id, room_id } = req.body;
    if (
      title === undefined ||
      description === undefined ||
      price === undefined ||
      rooms === undefined ||
      location_id === undefined ||
      room_id === undefined
    ) {
      res.status(400).json("Veuillez remplir tous les champs");
    }

    try {
      const accomodation = await Accomodation.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        rooms: req.body.rooms,
        location_id: req.body.location_id,
        room_id: req.body.room_id,
        user_id: req.user.id,
      });
      res.json(accomodation);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
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
  getAllAccomodation: async (req, res) => {
    try {
      const response = await Accomodation.findAll();
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  getAccomodationByUser: async (req, res) => {
    try {
      const response = await Accomodation.findAll({
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
      const response = await Accomodation.findAll({
        where: {
          room_id: req.params.room,
        },
      });
      if (response.length === 0 || typeof response === "undefined") {
        res
          .status(404)
          .json(
            "Aucun logement Avec le nombre de pièces demandé n'a été trouvé"
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
};

module.exports = accomodationController;
