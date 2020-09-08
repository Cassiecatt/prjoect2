const router = require("express").Router();
const { User } = require("../../models");

// GET /api/company
router.get("/", (req, res) => {
  User.findAll()
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500), json(err);
    });
});

// GET /api/company/1
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.param.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No company found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/company
router.post("/", (req, res) => {});

// PUT /api/copmany/1
router.put("/:id", (req, res) => {});

// DELETE /api/company/1
router.delete("/:id", (req, res) => {});

module.exports = router;
