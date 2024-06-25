const express = require('express');
const { createUser, getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');
const { createUserValidator, getUserValidator, updateUserValidator, deleteUserValidator } = require('../validations/userValidator');
const authController=require('../controllers/authController')

const router = express.Router();

router.route('/')

.post(
    authController.protect,
    authController.allowedTo('admin'),
    createUserValidator,createUser)

.get(authController.protect,
    authController.allowedTo('admin','manager'),getAllUsers)

router.route('/:id')
.get( authController.protect,
    authController.allowedTo('admin','manager'),getUserValidator,getUser)
.put(authController.protect,
    authController.allowedTo('admin'),updateUserValidator,updateUser)
.delete(authController.protect,
    authController.allowedTo('admin'),deleteUserValidator,deleteUser)


module.exports = router;