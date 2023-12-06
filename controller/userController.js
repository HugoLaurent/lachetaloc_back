const User = require("../models/user");

const userController = {
  getAnUser: async (req, res) => {
    try {
      const response = await User.findByPk(req.params.id);
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  getAllUser: async (req, res) => {
    try {
      const response = await User.findAll();
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
