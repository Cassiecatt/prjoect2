const { Model, DataTypes } = require("sequelize"); //sequelize model
const sequelize = require("../config/connection"); //sequelize

class Post extends Post {}

Post.init({
  id: {
    types: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    types: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [30],
    },
  },
  description: {
    types: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [30],
    },
    salary: {
      types: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
      // Refernece company id when created
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  },
});

module.exports = Post;