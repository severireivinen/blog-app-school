const logger = require("./logger");
const config = require("./config");
const jwt = require("jsonwebtoken");

const requestLogger = (req, _res, next) => {
  logger.info("Method: ", req.method);
  logger.info("Path: ", req.path);
  logger.info("Body: ", req.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (_req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, _req, res, next) => {
  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  } else if (error.name === "JsonWebTokenError") {
    return res.status(401).json({ error: "invalid token" });
  }

  logger.error(error.message);

  next(error);
};

const isAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "No valid token" });
    }

    const decodedToken = jwt.verify(token, config.SECRET);
    console.log("Decoded token: ", decodedToken);
    req.user = decodedToken;
    return next();
  } catch {
    return res.status(401).json({
      error: "Not authorized",
    });
  }
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  isAuth,
};
