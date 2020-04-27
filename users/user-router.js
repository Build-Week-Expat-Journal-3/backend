const router = require("express").Router();

const db = require("../data/dbModel");

router.get("/", (req, res) => {
  db.getUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  db.getById(req.params.id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "user not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id/posts", (req, res) => {
  db.getUserPosts(req.params.id)
    .then((posts) => {
      if (posts) {
        res.status(200).json(posts);
      } else {
        res.status(404).json({ message: "posts not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  db.deleteUser(req.params.id)
    .then(() => {
      res.status(200).json({ message: "successfully deleted" });
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  if (req.body.username) {
    db.getById(id).then((user) => {
      const username = {
        ...user,
        username: req.body.username,
      };
      db.updateUsername(id, username)
        .then(() => {
          res.status(201).json({ message: "success" });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    });
  } else {
    res.status(400).json({ message: "please provide a new username" });
  }
});

module.exports = router;
