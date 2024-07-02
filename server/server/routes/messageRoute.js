const express = require('express');
const { createMessage, getAllMessages, getMessage, updateMessage, deleteMessage, deleteMessagesBetweenUsers } = require('../controllers/messageController');
const authController=require('../controllers/authController')
const router = express.Router();

router.route('/')
.post(authController.protect,createMessage)
.get(getAllMessages)

router.route('/:id')
.get(getMessage)
.put(updateMessage)
.delete(deleteMessage)

router.route('/deleteMessagesBetweenUsers')
.post(authController.protect,deleteMessagesBetweenUsers)

module.exports = router;