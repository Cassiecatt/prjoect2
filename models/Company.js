const { Model, Datatypes, DataTypes } = require("sequelize"); //sequelize model
const sequelize = require("../config/connection"); //sequelize

// Add hook and hashing

class Company extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pasword: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
    // post_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   reference: {
    //     model: "post",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "company",
  }
);

module.exports = Company;
