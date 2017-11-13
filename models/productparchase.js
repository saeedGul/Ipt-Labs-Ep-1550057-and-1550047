'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProductParchase = sequelize.define('ProductParchase', {
    id: DataTypes.INTEGER,
    FullName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Contact: DataTypes.BIGINT,
    City: DataTypes.STRING,
    Address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ProductParchase;
};