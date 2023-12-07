const User = require("../../models/user");
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res
      .status(401)
      .json({ code: 401, message: "Empty or invalid token" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
    if (err) {
      return res.status(401).json({ code: 401, message: err.message });
    }
    req.user = await User.findByPk(user.id);
    next();
  });
}

module.exports = authenticateToken;
