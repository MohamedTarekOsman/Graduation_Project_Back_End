const express = require('express');
const { createNotification, getAllNotifications, getNotification, updateNotification, deleteNotification } = require('../controllers/notificationController');
const router = express.Router();

router.route('/')
.post(createNotification)
.get(getAllNotifications)

router.route('/:id')
.get(getNotification)
.put(updateNotification)
.delete(deleteNotification)


module.exports = router;