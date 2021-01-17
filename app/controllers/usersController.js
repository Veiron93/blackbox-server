const Users = require("../models/users.js");
const { Op } = require("sequelize");

const formHelper = require("../helpers/form.js");


// function requestStatus(message, type = "success"){

// 	let dataRequest = {
// 		type: type, // тип success || error
// 		msg: [
// 			// object {nameInput: имя input если ошибка, text: текст}
// 		] 
// 	};

// 	if(type == "success"){
// 		dataRequest.msg.push({text: message})

// 	}else if(type == "error"){

// 		let errors = [];

// 		message.forEach(error => {

// 			if(error.type == "unique violation"){
// 				errors.push(
// 					{
// 						nameInput: error.path, 
// 						text: "Пользователь с таким " + nameInput("unique", error.path) + " уже существует"
// 					}
// 				);
// 			}else if(error.type == "notNull Violation"){
// 				errors.push(
// 					{
// 						nameInput: error.path, 
// 						text: "Не заполнено обязательное поле " + nameInput("notNull", error.path)
// 					}
// 				);
// 			}
// 		});

// 		dataRequest.msg.push(...errors)
// 	}

// 	return dataRequest;
// }


// function nameInput(typeError, code){
// 	let name = "";

// 	if(typeError == "unique"){

// 		switch(code){
// 			case "phone":
// 				name = "Телефоном";
// 				break;
// 			case "email":
// 				name = "Email";
// 				break;
// 			default:
// 				name = code;
// 		}

// 	}else if(typeError == "notNull"){

// 		switch(code){
// 			case "first_name":
// 				name = "Имя";
// 				break;
// 			case "last_name":
// 				name = "Фамилия";
// 				break;
// 			case "phone":
// 				name = "Телефон";
// 				break;
// 			case "password":
// 				name = "Пароль";
// 				break;
// 			default:
// 				name = code;
// 		}
// 	}

// 	return name;
// }

// список пользователей
exports.listUsers = function(request, response){

	Users.findAll({
		where: {
			deleted: {
				[Op.is]: null
			}
		},
		order: [
			['id', 'DESC']
		]
	})
	.then(function(request){
		response.send(request);
		console.log("успешно");

	}).catch(function(err){
		response.send("Ошибка");

		console.log("Ошибка");
	});
};


// добавить пользователя
exports.addUser = function(request, response){

	let data = {};

	for (key in request.body){

		let value = request.body[key];
		
		if(value){
			value = value.trim(); // удаляем пробелы
			value = value.replace(/<[^>]+>/g,''); // удаляем code
		}	

		data[key] = value;
	}

	Users.create({
		first_name: data.firstName,
		last_name: data.lastName,
		patronym: data.patronym,
		phone: data.phone,
		email: data.email,
		password: data.password,
		address: data.address,
		status: "1"

	}).then(request => {

		response.send(formHelper.requestStatus("Пользователь успешно добавлен"));

	}).catch(err => {

		response.send(formHelper.requestStatus(err.errors, "error"));
	});
};


// удалить пользователя
exports.delUser = function(request, response){

	let idUser = request.body.id;
	let value = request.body.value;

	Users.update({deleted: value}, {
		where: {
			id: idUser
		}
	})
	.then(function(request){
		response.send("Успех");

	}).catch(function(err){
		response.send("Ошибка");

		console.log("Ошибка");
	});
};


// скрыть пользователя
exports.hiddenUser = function(request, response){

	let idUser = request.body.id;
	let value = request.body.value;

	Users.update({hidden: value}, {
		where: {
			id: idUser
		}
	})
	.then(function(request){
		response.send("Успех");

	}).catch(function(err){
		response.send("Ошибка");

		console.log("Ошибка");
	});
};