const router = require("express").Router();
const { Post, User, Category } = require("../models");

router.get("/", (req, res) => {
  // console.log(req.session);
  Post.findAll({
    attributes: ["title", "description", "salary"],
    include: [{ model: Category, attributes: ["category_name"] }],
  })
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});




module.exports = router;
