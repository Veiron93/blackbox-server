"use strict";
const sequelize = require('./db');

const express = require('express');
const session = require('express-session')
const app = express();
//const router = express.Router();
//const jsonParser = express.json();

const passport = require('passport');
//const LocalStrategy = require('passport-local');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const FileStore = require("session-file-store")(session);

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const cors = require('cors');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';


app.use(
	session({
		secret: "secret",
		store: new FileStore(),
		cookie: {
			path: '/',
			httpOnly: true,
			maxAge: 60 * 60 * 1000
		},
		resave: false,
		saveUnitializad: false
	})
);

//app.use(bodyParser.json());

// router.use(bodyParser.urlencoded({extended: false}));
// router.use(bodyParser.json());

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
