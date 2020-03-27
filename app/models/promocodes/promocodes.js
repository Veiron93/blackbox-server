const Sequelize = require('sequelize');
const sequelize = require('../../../db');

const Promocodes = sequelize.define("promocode", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	code: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	type: {
		type: Sequelize.STRING,
		allowNull: false
	},
	status: {
		type: Sequelize.STRING,
		allowNull: false
	},
	date_start: {
		type: Sequelize.DATE,
		allowNull: false
	},
	date_end: {
		type: Sequelize.DATE,
		allowNull: false
	}
});


// class Promocodes {

// 	code = null;
// 	price = null;
// 	type = null;
// 	status = null;
// 	date_start = null;
// 	date_end = null;


// 	constructor() {

// 	}

// 	schema (){
// 		return sequelize.define("promocode", {
// 			id: {
// 				type: Sequelize.INTEGER,
// 				autoIncrement: true,
// 				primaryKey: true,
// 				allowNull: false
// 			},
// 			code: {
// 				type: Sequelize.STRING,
// 				allowNull: false
// 			},
// 			price: {
// 				type: Sequelize.INTEGER,
// 				allowNull: false
// 			},
// 			type: {
// 				type: Sequelize.STRING,
// 				allowNull: false
// 			},
// 			status: {
// 				type: Sequelize.STRING,
// 				allowNull: false
// 			},
// 			date_start: {
// 				type: Sequelize.DATE,
// 				allowNull: false
// 			},
// 			date_end: {
// 				type: Sequelize.DATE,
// 				allowNull: false
// 			}
// 		});
// 	}
// }

module.exports = Promocodes;



