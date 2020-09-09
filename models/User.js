const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize"); //sequelize model
const sequelize = require("../config/connection"); //sequelize

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

User.beforeCreate(async function (newUserData) {
  newUserData.password = await bcrypt.hash(newUserData.password, 10);
  return newUserData;
});

User.beforeUpdate(async function (updatedUserData) {
  updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
  return updatedUserData;
});

module.exports = User;
