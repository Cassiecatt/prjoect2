const router = require("express").Router();
const { Post, User, Category } = require("../../models");
const withAuth = require("../../utils/auth");

// GET /api/posts
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "description", "salary"],
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
      { 
        model: Category, 
        attributes: ["id", "category_name"] },
    ],
  })
    .then((dbPostdata) => res.json(dbPostdata))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET /api/posts/:id
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["id"],
      }, 
      {
        model: Category,
        attributes: ["id", "category_name"]
      }
    ],
  })
    .then((dbPostdata) => {
      if (!dbPostdata) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostdata);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST /api/posts
router.post("/", withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    description: req.body.description,
    salary: req.body.salary,
    user_id: req.session.user_id,
    category_id: req.body.category_id
  })
    .then((dbPostdata) => res.json(dbPostdata))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//PUT /api/posts/id
router.put("/:id", (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostdata) => {
      if (!dbPostdata) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostdata);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE /api/posts/id
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostdata) => {
      if (!dbPostdata) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostdata);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
