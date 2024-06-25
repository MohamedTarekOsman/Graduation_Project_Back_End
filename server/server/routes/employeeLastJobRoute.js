const express = require('express');
const { createEmployeeLastJob, getAllEmployeeLastJobs, getEmployeeLastJob, updateEmployeeLastJob, deleteEmployeeLastJob } = require('../controllers/employeeLastJobController');
const router = express.Router();

router.route('/')
.post(createEmployeeLastJob)
.get(getAllEmployeeLastJobs)

router.route('/:id')
.get(getEmployeeLastJob)
.put(updateEmployeeLastJob)
.delete(deleteEmployeeLastJob)


module.exports = router;