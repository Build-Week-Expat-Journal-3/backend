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

// router.post("/login", (req, res) => {
//   User.getByUsername(req.body.username)
//     .then((user) => {
//       if (user && bcrypt.compareSync(req.body.password, user[0].password)) {
//         const token = createToken(user[0]);
//         res.status(200).json({ user: user[0].id, token });
//       } else {
//         res.status(401).json({ message: "failed to authenticate" });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ error: err.message });
//     });
// });

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  User.getByUsername(username)
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = createToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}`,
          token,
          user: {
            user_id: user.id,
            username: user.username,
          },
        });
      } else {
        res.status(401).json({ message: "Incorrect username or password" });
      }
    })
    .catch(({ name, message, stack }) => {
      res.status(500).json({ name: name, message: message, stack: stack });
    });
});

module.exports = router;
