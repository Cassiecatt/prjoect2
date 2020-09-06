const { Model, DataTypes } = require("sequelize"); //sequelize model
const sequelize = require("../config/connection"); //sequelize

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [30],
      },
    },
    post_salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: "company",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
