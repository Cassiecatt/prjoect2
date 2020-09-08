const Post = require("./Post"); // post model
const Category = require("./Category"); // categories model
const User = require("./User"); // user model

//Associations

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Category.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = {
  Post,
  User,
  Category,
};
