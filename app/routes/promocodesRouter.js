const express = require("express");
const promocodesController = require("../controllers/promocodesController.js");
const promocodesRouter = express.Router();

promocodesRouter.use("/check-promocode", promocodesController.checkPromocode);
promocodesRouter.use("/add-promocode", promocodesController.addPromocode);
 
module.exports = promocodesRouter;