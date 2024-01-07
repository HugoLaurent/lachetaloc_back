const { User, Notification } = require("../models");

const notificationController = {
  /**
   * Récupère les notifications pour un utilisateur spécifique.
   */

  getNotificationsByUser: async (req, res) => {
    try {
      const notifications = await Notification.findAll({
        where: {
          user_id: req.user.id,
        },
      });
      res.json(notifications);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  /**
   * Marque une notification comme lue.
   */

  notificationRead: async (req, res) => {
    try {
      const checkUser = await Notification.findByPk(req.params.id);
      if (checkUser.user_id !== req.user.id) {
        return res.status(400).json("Vous n'avez pas de notification");
      }
      await Notification.update(
        {
          read: true,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.json("Notification lue");
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  deleteNotification: async (req, res) => {
    try {
      await Notification.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json("notification supprimée");
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = notificationController;
