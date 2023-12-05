const Logement = require("../models/logementModel");

const logementController = {
  getAllLogement: async (req, res) => {
    try {
      const logements = await Logement.findAll();
      res.json(logements);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = logementController;
