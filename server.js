const express = require('express');
const app = express();
const jsonParser = express.json();

const cors = require('cors');
app.use(cors());

const sequelize = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// каталог
// const productsRouter = require("./app/routes/productsRouter.js");
// app.use("/products", productsRouter);

// промокоды
const promocodesRouter = require("./app/routes/promocodesRouter.js");
app.use("/promocodes", promocodesRouter);



sequelize
	.authenticate()
	.then(() => {
		console.log('Успешное подключение к БД');

		app.listen(4000, function(){
		    console.log("Сервер запущен");
		});
	})

	.catch(err => {
		console.error('Ошибка подключения к БД:', err);
	});

// sequelize.sync().then(result=>{
//   console.log(result);
// })
// .catch(err=> console.log(err));

