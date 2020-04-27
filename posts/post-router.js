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

router.get("/:id", (req, res) => {
  db.getPostById(req.params.id)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "invalid ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  db.deletePost(req.params.id)
    .then(() => {
      res.status(200).json({ message: "successfully deleted" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  if (req.body.story) {
    db.getPostById(id).then((post) => {
      const updated = {
        ...post,
        story: req.body.story,
      };
      db.updatePost(id, updated)
        .then(() => {
          res.status(201).json({ message: "successfully updated" });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    });
  } else {
    res.status(400).json({ message: "please provide a story" });
  }
});

module.exports = router;
