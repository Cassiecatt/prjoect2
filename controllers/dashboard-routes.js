const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Category } = require("../models");

router.get("/", (req, res) => {
  res.render("dashboard", { loggedIn: true });
});

// router.get('/', (req, res) => {
//     Post.findAll({
//       where: {
//         user_id: req.session.user_id
//       },
//       attributes: [
//         'title',
//         'description',
//         'salary',
//       ],
//       include: [
//         {
//           model: User,
//           attributes: ['id']
//         }
//       ]
//     })
//       .then(dbPostData => {
//         // serialize data before passing to template
//         const posts = res.json(dbPostData)
//         res.render('dashboard', { posts, loggedIn: true });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

module.exports = router;
