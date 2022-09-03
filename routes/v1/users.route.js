const express = require("express");
const userController = require("../../controllers/user.controller");
const router = express.Router();

router
.route("/all")
.get(userController.getAllusers)

router
.route("/random")
.get(userController.getRandomuser)

router
.route("/save")
.post(userController.postRandomuers)

router
.route("/update")
.patch(userController.updateRandomuser)

router
.route("/delete/:id")
.delete(userController.deletUser)

module.exports=router;