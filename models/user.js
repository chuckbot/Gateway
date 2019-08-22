'use strict';
const UserDefinition = require('../tables/table_definitions').UserDefinition;

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    UserDefinition.modelName,
    UserDefinition.buildColumns(DataTypes),
    {}
  );
  model.associate = function(models) {};
  return model;
};
