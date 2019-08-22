'use strict';
const TableDefinitionFactory = require('../factories').TableDefinitionFactory;

module.exports.tableName = 'Users';
module.exports.modelName = 'User';
module.exports.primaryKeyName = TableDefinitionFactory.genericPrimaryKeyName;

module.exports.buildColumns = DataTypes => {
  return TableDefinitionFactory.withGenericFields(DataTypes, {
    name: {
      allowNull: false,
      validate: {
        notEmpty: true
      },
      type: DataTypes.STRING
    },
    DNI: {
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      },
      type: DataTypes.STRING
    },
    position: {
      allowNull: false,
      validate: {
        notEmpty: true
      },
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      },
      type: DataTypes.STRING
    },
    encryptedPassword: {
      allowNull: false,
      validate: {
        notEmpty: true
      },
      type: DataTypes.STRING
    },
    salt: {
      allowNull: false,
      validate: {
        notEmpty: true
      },
      type: DataTypes.STRING
    },
    token: {
      allowNull: true,
      unique: true,
      type: DataTypes.STRING(1000)
    }
  });
};
