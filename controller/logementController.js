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
};

module.exports = logementController;
