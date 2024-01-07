const { Op } = require("sequelize");

const { Contact } = require("../models");
const { User } = require("../models");
const { Notification } = require("../models");

const contactController = {
  addContact: async (req, res) => {
    const id = +req.body.id;
    const checkId = await User.findByPk(id);
    if (!checkId) {
      return res.status(400).json("L'id n'existe pas");
    }
    if (!id) {
      return res.status(400).json("L'id doit être renseigné");
    }
    if (isNaN(id)) {
      return res.status(400).json("L'id doit être un nombre");
    }
    if (id === +req.user.id) {
      return res.status(400).json("Vous ne pouvez pas vous ajouter vous-même");
    }

    try {
      const contact = await Contact.findOne(
        {
          where: {
            contact_id: id,
            user_id: +req.user.id,
          },
        },
        { raw: true }
      );
      if (contact) {
        if (contact.accepted === true) {
          return res.status(400).json("Ce contact existe déjà");
        }
        return res.status(400).json("En attente de validation");
      }

      const newContact = await Contact.create({
        contact_id: id,
        user_id: +req.user.id,
        accepted: false,
      });
      await Notification.create({
        title: "Nouveau contact",
        message: `Vous avez une nouvelle demande de contact de la part de ${req.user.pseudo}, si vous acceptez, vous consentez à partager votre email avec cette personne`,
        user_id: id,
        read: false,
      });
      res.json(newContact);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  acceptContact: async (req, res) => {
    const id = +req.body.id;
    const contact = await Contact.findOne({
      where: {
        contact_id: +req.user.id,
        user_id: id,
      },
    });
    if (!contact) {
      return res.status(400).json("Ce contact n'existe pas");
    }

    try {
      await contact.update({
        accepted: true,
      });
      await Notification.create({
        title: "Contact accepté",
        message: `${req.user.pseudo} a accepté votre demande de contact, voici son email: ${req.user.email}`,
        user_id: id,
        read: false,
      });
      res.json(contact);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  getPendingContact: async (req, res) => {
    try {
      const contact = await Contact.findAll({
        where: {
          contact_id: +req.user.id,
          accepted: false,
        },
      });
      if (contact.length === 0) {
        return res.status(400).json("Vous n'avez pas de demande de contact");
      }
      const filterContact = contact.map((contact) => {
        return contact.user_id;
      });
      const user = await User.findAll({
        where: {
          id: filterContact,
        },
        attributes: ["pseudo", "id"],
      });
      res.json(user);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
  getAcceptedContact: async (req, res) => {
    try {
      const contact = await Contact.findAll({
        where: {
          accepted: true,

          [Op.or]: [{ contact_id: +req.user.id }, { user_id: +req.user.id }],
        },
      });
      if (contact.length === 0) {
        return res.status(400).json("Vous n'avez pas de contact");
      }
      const filterContact = contact.map((contact) => {
        if (contact.contact_id === +req.user.id) {
          return contact.user_id;
        }
        return contact.contact_id;
      });
      const user = await User.findAll({
        where: {
          id: filterContact,
        },
      });
      const filterUser = user.map((user) => {
        return {
          pseudo: user.pseudo,
          email: user.email,
        };
      });

      res.json(filterUser);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = contactController;
