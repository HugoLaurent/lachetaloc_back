const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {
  login: async (req, res) => {
    const { pseudo, password } = req.body;

    const user = await User.findOne({
      where: {
        pseudo,
      },
    });
    if (user) {
      if (bcrypt.compare(password, user.dataValues.password)) {
        const token = jwt.sign(
          {
            id: user.dataValues.id,
            pseudo: user.dataValues.pseudo,
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1h" }
        );
        const refreshToken = jwt.sign(
          {
            id: user.dataValues.id,
            pseudo: user.dataValues.pseudo,
          },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: "7d" }
        );

        console.log(token);
        return res.json({ token, refreshToken });
      }
    }
    res.status(401).json({
      code: 401,
      message: "Invalid Credentials",
    });
  },
};

module.exports = authController;
