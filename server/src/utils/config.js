require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
  REFRESH_SECRET,
};
