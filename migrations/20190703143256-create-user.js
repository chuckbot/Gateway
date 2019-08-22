'use strict';
const UserDefinition = require('../tables/table_definitions').UserDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      UserDefinition.tableName,
      UserDefinition.buildColumns(Sequelize)
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(UserDefinition.tableName);
  }
};
