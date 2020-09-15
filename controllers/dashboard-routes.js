const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Category } = require("../models");

router.get("/", (req, res) => {
  res.render("dashboard", { loggedIn: true });
});

// router.get('/', (req, res) => {
//     Post.findAll(
//         {
//             where: {
//                 user_id: req.params.id
//             }
//         }
//     )
// })

module.exports = router;
