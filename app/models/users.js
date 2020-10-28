const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const sequelize = require('../../db');

const Users = sequelize.define("user", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	first_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	last_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	patronym: {
		type: Sequelize.STRING,
		allowNull: true
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
		}
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	phone: {
		type: Sequelize.INTEGER,
		allowNull: true,
		unique: true,
		validate: {
			not: ["[a-z]",'i']
		}
	},
	address: {
		type: Sequelize.STRING,
		allowNull: true
	},
	hidden: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	deleted: {
		type: Sequelize.INTEGER,
		allowNull: true
	}
});

module.exports = Users;



