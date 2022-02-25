const tokenRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const auth = require("../utils/auth");
const User = require("../models/user");

tokenRouter.post("/", async (req, res) => {
  const token = req.cookies.jid;
  if (!token) {
    return res.status(401).json({ error: "No valid token" });
  }

  let payload;

  try {
    payload = jwt.verify(token, config.REFRESH_SECRET);
  } catch (err) {
    return res.status(401).json({ error: "Bad token" });
  }

  console.log("Payload: ", payload);

  // Valid token, send a new one
  const user = await User.findById({ _id: payload.id });

  if (!user) {
    return res.status(404).json({ error: "Invalid user id" });
  }

  if (user.tokenVersion !== payload.tokenVersion) {
    return res.status(401).json({ error: "Token expired" });
  }

  return res.status(200).send(auth.createAccessToken(user));
});

module.exports = tokenRouter;
