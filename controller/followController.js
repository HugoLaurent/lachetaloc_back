const Follow = require("../models/follow");
const Accommodation = require("../models/accomodation");
const { Op } = require("sequelize");

const followController = {
  /**
   * Crée un suivi pour une accommodation spécifique par un utilisateur.
   */

  followAccomodation: async (req, res) => {
    try {
      await Follow.create({
        user_id: req.user.id,
        accomodation_id: req.params.id,
      });
      res.json({ follow: true });
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  /**
   * Récupère les accommodations suivies par un utilisateur spécifique.
   */

  getAccomodationFollowed: async (req, res) => {
    try {
      const response = await Follow.findAll({
        where: {
          user_id: req.user.id,
        },
      });

      const resultTotal = [];
      response.forEach((follow) => {
        resultTotal.push(follow.dataValues.accomodation_id);
      });

      const accomodations = await Accommodation.findAll({
        where: {
          id: {
            [Op.in]: resultTotal,
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
