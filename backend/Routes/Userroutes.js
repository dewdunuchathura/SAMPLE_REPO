const express = require('express');
const router = express.Router();

//insert model
const User = require('../Model/Usermodel');

//insert user controller
const userController = require('../Controllers/Usercontroller');

//callingg rout path
router.get("/", userController.getAllUsers);
router.post("/", userController.addUsers);
router.get("/:id", userController.getById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

//export
module.exports = router;