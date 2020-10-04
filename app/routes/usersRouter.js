const express = require("express");
const usersController = require("../controllers/usersController.js");
const usersRouter = express.Router();

usersRouter.use("/add", usersController.addUser);
usersRouter.use("/", usersController.listUsers);
 
module.exports = usersRouter;