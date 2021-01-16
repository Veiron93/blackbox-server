"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./db');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());


// ROUTES
// users
const usersRouter = require("./app/routes/usersRouter.js");
app.use("/users", usersRouter);


// start server
app.listen(4000, function () {
	console.log("Сервер запущен");
});

// test connecting db
sequelize
	.authenticate()
	.then(() => {
		console.log('Успешное подключение к БД');
	})
	.catch(err => {
		console.error('Ошибка подключения к БД:', err);
	});


// sequelize.sync().then(result=>{
//   console.log(result);
// })
// .catch(err=> console.log(err));
