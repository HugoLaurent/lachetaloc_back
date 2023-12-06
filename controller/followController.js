const follow = require("../models/follow");

const followController = {
  getAccomodationFollowed: async (req, res) => {
    try {
      const response = await follow.findAll({
        where: {
          user_id: req.params.id,
        },
      });
      res.json(response);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = followController;
