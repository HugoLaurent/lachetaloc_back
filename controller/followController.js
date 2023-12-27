const { Accomodation, Follow } = require("../models");
const { Op } = require("sequelize");

const followController = {
  /**
   * Crée un suivi pour une accommodation spécifique par un utilisateur.
   */

  followAccomodation: async (req, res) => {
    try {
      const existingFollow = await Follow.findOne({
        where: {
          user_id: req.user.id,
          accomodation_id: req.params.id,
        },
      });
      if (existingFollow) {
        return res.status(409).json({ error: "Vous suivez déjà ce logement" });
      }
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
   * Supprime un suivi pour une accommodation spécifique par un utilisateur.
   */
  deleteFollowAccomodation: async (req, res) => {
    try {
      const existingFollow = await Follow.findOne({
        where: {
          user_id: req.user.id,
          accomodation_id: req.params.id,
        },
      });
      if (!existingFollow) {
        return res
          .status(409)
          .json({ error: "Vous ne suivez pas ce logement" });
      }
      await existingFollow.destroy();
      res.json({ follow: false });
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

      const accomodations = await Accomodation.findAll({
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
