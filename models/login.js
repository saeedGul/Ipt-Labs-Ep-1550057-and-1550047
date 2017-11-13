'use strict';
module.exports = (sequelize, DataTypes) => {
  var Login = sequelize.define('Login', {
    id: DataTypes.INTEGER,
    UserName: DataTypes.STRING,
    Email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Login;
};