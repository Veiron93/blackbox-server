
exports.requestStatus = function (message, type = "success"){

		let dataRequest = {
			type: type, // тип success || error
			msg: [
				// object {nameInput: имя input если ошибка, text: текст}
			] 
		};

		if(type == "success"){
			dataRequest.msg.push({text: message})

		}else if(type == "error"){

			let errors = [];

			message.forEach(error => {

				if(error.type == "unique violation"){
					errors.push(
						{
							nameInput: error.path, 
							text: "Пользователь с таким " + nameInput("unique", error.path) + " уже существует"
						}
					);
				}else if(error.type == "notNull Violation"){
					errors.push(
						{
							nameInput: error.path, 
							text: "Не заполнено обязательное поле " + nameInput("notNull", error.path)
						}
					);
				}
			});

			dataRequest.msg.push(...errors)
		}

		return dataRequest;
	}



let nameInput = function(typeError, code){
		
	let name = "";

	if(typeError == "unique"){

		switch(code){
			case "phone":
				name = "Телефоном";
				break;
			case "email":
				name = "Email";
				break;
			default:
				name = code;
		}

	}else if(typeError == "notNull"){

		switch(code){
			case "first_name":
				name = "Имя";
				break;
			case "last_name":
				name = "Фамилия";
				break;
			case "phone":
				name = "Телефон";
				break;
			case "password":
				name = "Пароль";
				break;
			default:
				name = code;
		}
	}

	return name;
}