const express = require('express');
const { createEmployeeLog, getAllEmployeeLogs, getEmployeeLog, updateEmployeeLog, deleteEmployeeLog } = require('../controllers/employeeLogController');
const router = express.Router();

router.route('/')
.post(createEmployeeLog)
.get(getAllEmployeeLogs)

router.route('/:id')
.get(getEmployeeLog)
.put(updateEmployeeLog)
.delete(deleteEmployeeLog)


module.exports = router;