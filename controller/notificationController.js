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
   * Crée une nouvelle notification pour l'utilisateur actuel.
   */

  createNotification: async (req, res) => {
    console.log("req.body", req.body);
    try {
      const notification = await Notification.create({
        title: "Nouveau contact",
        message: `Vous avez une nouvelle demande de contact de la part de ${req.user.pseudo}`,
        user_id: req.user.id,
      });
      res.json(notification);
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
      const notification = await Notification.update(
        {
          read: true,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.json(notification);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = notificationController;
