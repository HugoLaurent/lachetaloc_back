const follow = require("../models/follow");
const accomodation = require("../models/accomodation");
const user = require("../models/user");
const { Op } = require("sequelize");

const followController = {
  followAccomodation: async (req, res) => {
    try {
      const response = await follow.create({
        user_id: req.user.id,
        accomodation_id: req.params.id,
      });
      res.json({ follow: true });
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  getAccomodationFollowed: async (req, res) => {
    try {
      const response = await follow.findAll({
        where: {
          user_id: req.user.id,
        },
      });
      const resultTotal = [];
      response.forEach((follow) => {
        resultTotal.push(follow.dataValues.accomodation_id);
      });
      const accomodations = await accomodation.findAll({
        where: {
          id: {
            [Op.any]: `{${resultTotal}}`,
          },
        },
      });
      res.json(accomodations);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = followController;
