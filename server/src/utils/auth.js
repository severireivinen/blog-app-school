const config = require("./config");
const jwt = require("jsonwebtoken");

const createAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, username: user.username, tokenVersion: user.tokenVersion },
    config.SECRET,
    {
      expiresIn: "5m",
    }
  );
};

const createRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      tokenVersion: user.tokenVersion,
    },
    config.REFRESH_SECRET,
    { expiresIn: "7d" }
  );
};

const sendRefreshToken = (res, token) => {
  res.cookie("jid", token, { httpOnly: true, sameSite: "lax" });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
};
