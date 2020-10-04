const Users = require("../models/users.js");

exports.addUser = function(request, response){

	let requestInformation = {
		type: null,
		msg: []
	};




	// let firstName = request.body.firstName.trim().replace(/<[^>]+>/g,'');
	// let lastName = request.body.lastName.trim().replace(/<[^>]+>/g,'');
	// let patronym = request.body.patronym.trim().replace(/<[^>]+>/g,'');
	// let email = request.body.email.trim().replace(/<[^>]+>/g,'');
	// let password = request.body.password.trim().replace(/<[^>]+>/g,'');
	// let phone = request.body.phone.trim().replace(/<[^>]+>/g,'');
	// let address = request.body.address.trim().replace(/<[^>]+>/g,'');

	


	let firstName = request.body.firstName;
	let lastName = request.body.lastName;
	let patronym = request.body.patronym;
	let email = request.body.email;
	let password = request.body.password;
	let phone = request.body.phone;
	let address = request.body.address;

	

	Users.create({
		first_name: firstName,
		last_name: lastName,
		patronym: patronym,
		email: email,
		password: password,
		phone: phone,
		address: address,
		status: "1"

	}).then(function(request){

		requestInformation.type = "success";
		requestInformation.msg.push(
			{
				nameInput: null, 
				text: "Пользователь успешно добавлен"
			}
		);

		response.send(requestInformation);

	}).catch(function(err){

		requestInformation.type = "error";

		err.errors.forEach(error => {
			if(error.path == "email" && error.type == "unique violation"){
				requestInformation.msg.push(
					{
						nameInput: error.path, 
						text: "Пользователь с таким Email уже существует"
					}
				);
			}	
			
			if(error.path == "phone" && error.type == "unique violation"){
				requestInformation.msg.push(
					{
						nameInput: error.path, 
						text: "Пользователь с таким Номером телефона уже существует"
					}
				);
			}
		});

		response.send(requestInformation);

		
	});
};

exports.listUsers = function(request, response){

	Users.findAll()
	.then(function(request){

		response.send(request);

		

	}).catch(function(err){
		response.send("Ошибка");

		console.log("Ошибка");
	});
};