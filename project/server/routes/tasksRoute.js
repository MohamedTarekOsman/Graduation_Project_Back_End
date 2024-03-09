const express = require('express');
const { createTasks, getAllTaskss, getTasks, updateTasks, deleteTasks } = require('../controllers/tasksController');
const router = express.Router();
const authController=require('../controllers/authController')
router.route('/')
.post(
    authController.protect,
    authController.allowedTo('admin','manager'),
    createTasks
    )
.get(
    authController.protect,
    authController.allowedTo('admin','manager'),
    getAllTaskss
    )

router.route('/:id')
.get(getTasks)
.put(updateTasks)
.delete(deleteTasks)


module.exports = router;