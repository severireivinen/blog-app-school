const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");
const auth = require("../utils/auth");

const invalidPassword = (password) => !password || password.length < 5;

usersRouter.get("/", async (_req, res) => {
  const users = await User.find({}).populate("blogs");

  res.json(users.map((user) => user.toJSON()));
});

usersRouter.post("/register", async (req, res) => {
  const body = req.body;

  if (invalidPassword(body.password)) {
    return res.status(400).json({
      error: "Password to be at least 5 characters long",
    });
  }

  const passwordHash = await bcrypt.hash(body.password, 10);

  const user = new User({
    username: body.username,
    password: passwordHash,
  });

  const savedUser = await user.save();

  res.json(savedUser);
});

usersRouter.post("/login", async (req, res) => {
  const body = req.body;

  const user = await User.findOne({ username: body.username });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(body.password, user.password);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "Invalid username or password",
    });
  }

  auth.sendRefreshToken(res, auth.createRefreshToken(user));

  const token = auth.createAccessToken(user);

  res.status(200).send(token);
});

module.exports = usersRouter;
