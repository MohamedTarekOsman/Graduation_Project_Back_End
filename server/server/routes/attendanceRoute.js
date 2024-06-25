const express = require('express');
const { getAllAttendances, createAttendance, getAttendance, updateAttendance, deleteAttendance } = require('../controllers/attendanceController');
const router = express.Router();
const authController=require('../controllers/authController')
router.route('/')
.post(
    authController.protect,
    authController.allowedTo('admin','manager',"employee"),
    createAttendance
    )
.get(
    authController.protect,
    authController.allowedTo('admin','manager',"employee"),
    getAllAttendances
    )

router.route('/:id')
.get(getAttendance)
.put(updateAttendance)
.delete(deleteAttendance)


module.exports = router;