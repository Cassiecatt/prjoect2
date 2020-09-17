const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Category } = require("../models");
const withAuth = require("../utils/auth"); //middleware

// router.get("/", (req, res) => {
//   res.render("dashboard", { loggedIn: true });
// });

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["title", "description", "salary"],
    include: [
      {
        model: Category,
        attributes: ["category_name"],
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log(posts);
      res.render("dashboard", {
        laout: "main",
        posts,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
