const Promocodes = require("../models/promocodes/promocodes.js");


exports.checkPromocode = function(request, response){

	const code = request.body.code;

	Promocodes.findAll({
		raw: true

	}).then(result => {

  		response.send(result);

	}).catch(err=>console.log(err));
};

exports.addPromocode = function(request, response){
	Promocodes.create({
		code: "234",
		price: 300,
		type: "public",
		status: "active",
		date_start: "2020-02-12",
		date_end: "2020-03-11"
	}).then(result=>{

		const promocode = {id: result.id, code: result.code, price: result.price, status: result.status}
		response.send(promocode);
		
	}).catch(err=>console.log(err));
};


// exports.hitProducts = function(request, response){

// 	Products.findAll({
// 		raw:true, 
// 		where: {
// 			id: id
// 		}
// 	}).then(result=>{

// 		response.send((result.length > 0)? result : "Пусто"); 

// 	}).catch(err=>console.log(err));

// };


// exports.addCarService = function(request, response){

// Products.create({
	// 	name: "Игровая приставка",
	// 	description: "108 классических игр"
	// }).then(result=>{
	//     const product = {id: result.id, name: result.name, description: result.description}
 //  		//console.log(service);

 //  		response.send(product); 

	// }).catch(err=>console.log(err));
// };





// exports.getCarServices = function(request, response){

// 	const ids = request.body.ids;

// 	CarServices.findAll({
// 		attributes: ['id', 'name', 'phone'],
// 		where: {
// 			id: ids
// 		} 

// 	}).then(result => {

//   		response.send(result);

// 	}).catch(err=>console.log(err));
// };

// exports.listCarService = function(request, response){

// 	const ids = request.body.ids;

// 	CarServices.findAll({
// 		attributes: ['id', 'name', 'phone'],
// 		where: {
// 			id: ids
// 		},
// 		include: [
// 			{
// 				model: Services,
// 				attributes: ['id', 'name', 'phone'],
// 	    	}
// 	    ],

// 	}).then(result => {

//   		response.send(result);

// 	}).catch(err=>console.log(err));
// };

