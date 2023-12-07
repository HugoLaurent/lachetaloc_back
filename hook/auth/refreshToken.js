const jwt = require("jsonwebtoken");

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1y" });
}

const accessToken = generateAccessToken(user);
const refreshToken = generateRefreshToken(user);
res.send({
  accessToken,
  refreshToken,
});

module.exports = generateRefreshToken;
