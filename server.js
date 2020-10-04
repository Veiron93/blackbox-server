"use strict";
const sequelize = require('./db');

const express = require('express');
const router = express.Router();
const jsonParser = express.json();
const app = express();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

router.use(bodyParser.urlencoded({
	extended: false
}));

router.use(bodyParser.json());

// промокоды
// const promocodesRouter = require("./app/routes/promocodesRouter.js");
// app.use("/promocodes", promocodesRouter);

// пользователи
const usersRouter = require("./app/routes/usersRouter.js");
app.use("/users", usersRouter);

sequelize
	.authenticate()
	.then(() => {
		console.log('Успешное подключение к БД');

		app.listen(4000, function () {
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
