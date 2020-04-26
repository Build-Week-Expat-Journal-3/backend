const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
  };

  const secret = process.env.JWT_KEY;

  const options = {
    expiresIn: "8h",
  };

  return jwt.sign(payload, secret, options);
};
