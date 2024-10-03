require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT || 4001,
  jwtSecret: process.env.JWT_SECRET,
};