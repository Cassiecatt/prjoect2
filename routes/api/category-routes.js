const router = require("express").Router();
const { Category, Post } = require("../../models");

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

//PUT /api/categories/category_name
router.put("/:category_name", (req, res) => {
  Category.update(req.body, {
    where: {
      category_name: req.params.category_name,
    },
    //   include: [Post],
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

//DELETE /api/categories/category_name
router.delete("/:category_name", (req, res) => {
  Category.destroy({
    where: {
      category_name: req.params.category_name,
    },
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

module.exports = router;
