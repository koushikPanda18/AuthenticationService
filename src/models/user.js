'use strict';
const {
  Model
} = require('sequelize');
const bcrypt=require('bcrypt');
const {SALT}=require('../config/server-config')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[5,30]
      }

    }
  }, {
    sequelize,
    modelName: 'User',
  });


  //Hook for encripting the password before creation of new user into the database
  User.beforeCreate((user)=>{
    const encryptedPassword=bcrypt.hashSync(user.password, SALT);
    user.password=encryptedPassword;
  })



  return User;
};