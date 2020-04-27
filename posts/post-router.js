const router = require("express").Router();

const db = require("../data/dbModel");

router.get("/", (req, res) => {
  db.getAllPosts()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
