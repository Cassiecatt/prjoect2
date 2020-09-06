const Post = require("./Post"); // post model
const Company = require("./Company"); // company model
const Categories = require("./Category"); // categories model

//Associations

Post.belongsTo(Company, {
  foreignKey: "company_id",
  onDelete: "CASCADE",
});

Categories.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = {
  Post,
  Company,
  Categories,
};
