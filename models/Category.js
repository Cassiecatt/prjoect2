const { Model, Datatypes, DataTypes } = require("sequelize"); //sequelize model
const sequelize = require("../config/connection"); //sequelize

class Categories extends Model {}

Categories.init(
  {
    id: {
      types: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      types: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "categories",
  }
);

module.exports = Categories;