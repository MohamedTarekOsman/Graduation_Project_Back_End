const express = require('express');
const { createMessage, getAllMessages, getMessage, updateMessage, deleteMessage } = require('../controllers/messageController');
const router = express.Router();

router.route('/')
.post(createMessage)
.get(getAllMessages)

router.route('/:id')
.get(getMessage)
.put(updateMessage)
.delete(deleteMessage)


module.exports = router;