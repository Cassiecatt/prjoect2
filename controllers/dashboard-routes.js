const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Category } = require("../models");

// router.get("/", (req, res) => {
//   res.render("dashboard", { loggedIn: true });
// });

router.get("/", (req, res) => {
    Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
          "title",
          "description",
          "salary",
      ],
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(posts)
        res.render("dashboard", {
            laout: 'main',
          posts, loggedIn: true
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
