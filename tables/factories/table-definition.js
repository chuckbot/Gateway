'use strict';
module.exports.genericPrimaryKeyName = 'id';

module.exports.withGenericFields = (DataTypes, tableFields) => {
  tableFields.id = {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  };
  tableFields.createdAt = {
    allowNull: false,
    type: DataTypes.DATE
  };
  tableFields.updatedAt = {
    allowNull: false,
    type: DataTypes.DATE
  };
  return tableFields;
};
