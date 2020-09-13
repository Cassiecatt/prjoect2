const Post = require("./Post"); // post model
const Category = require("./Category"); // categories model
const User = require("./User"); // user model

//Associations

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
});

Category.hasMany(Post, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

module.exports = {
  Post,
  User,
  Category,
};
