const express = require('express');
const { createTasks, getAllTaskss, getTasks, updateTasks, deleteTasks } = require('../controllers/tasksController');
const router = express.Router();
const authController=require('../controllers/authController');
const { createTaskValidator, updateTaskValidator } = require('../validations/taskValidator');
router.route('/')
.post(
    authController.protect,
    authController.allowedTo('admin','manager'),
    createTaskValidator,
    createTasks
    )
.get(
    authController.protect,
    authController.allowedTo('admin','manager'),
    getAllTaskss
    )

router.route('/:code')
.get(getTasks)

router.route('/:id')
.put(updateTaskValidator,updateTasks)
.delete(deleteTasks)


module.exports = router;