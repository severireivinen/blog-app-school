const config = require("./utils/config");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");
const usersRouter = require("./controllers/users");
const tokenRouter = require("./controllers/token");
const blogsRouter = require("./controllers/blogs");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((error) => {
    logger.error("Error conencting to database:", error.message);
  });
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],

    credentials: true,
  })
);

app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/users", usersRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/token", tokenRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
