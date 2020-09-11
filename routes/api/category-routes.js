const router = require("express").Router();
const { Post, Category } = require("../../models");

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
router.get("/:category_name", (req, res) => {
  Category.findOne({
    where: {
      category_name: req.params.category_name,
    },
    include: [Post],
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this name" });
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
router.post("/", (req, res) => {
  Category.create(req.body)
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
