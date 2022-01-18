// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Permissions extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Permissions.init({
//     permission_Name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Permissions',
//   });
//   return Permissions;
// };

const db = require('./db');
const { DataTypes, Sequelize } = require('sequelize');

const Permission = db.define(
	'Permission',
	{
		permission_Name: DataTypes.STRING,

		createdAt: DataTypes.DATE,

		updatedAt: DataTypes.DATE,
	},
	{
		tableName: 'Permissions',
	}
);

module.exports = Permission;
