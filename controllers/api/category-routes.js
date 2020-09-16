const router = require("express").Router();
const { Category, Post } = require("../../models");
const withAuth = require('../../utils/auth');

//GET /api/categories
router.get("/", (req, res) => {
  Category.findAll({
    include: [Post],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET /api/categories/category_name
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Post],
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST /api/categories
router.post("/", withAuth, (req, res) => {
  Category.create(req.body)
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//PUT /api/categories/:id
router.put("/:id", withAuth, (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
    //   include: [Post],
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE /api/categories/category_name
router.delete("/:id", withAuth, (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
