const router = require("express").Router();
const bcrypt = require("bcryptjs");
const createToken = require("../config/create-token");

const User = require("../data/dbModel");

router.post("/register", (req, res) => {
  const creds = req.body;
  const hash = bcrypt.hashSync(creds.password, 9);

  creds.password = hash;

  User.addUser(creds)
    .then((newUser) => {
      const token = createToken(newUser);
      res.status(201).json({ user: newUser, token });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/login", (req, res) => {
  User.getByUsername(req.body.username)
    .then((user) => {
      if (user && bcrypt.compareSync(req.body.password, user[0].password)) {
        const token = createToken(user);
        res.status(200).json({ message: `${user[0].id}`, token });
      } else {
        res.status(401).json({ message: "failed to authenticate" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
