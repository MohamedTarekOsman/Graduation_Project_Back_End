const express = require('express');
const { createEmployeeLastJob, getAllEmployeeLastJobs, getEmployeeLastJob, updateEmployeeLastJob, deleteEmployeeLastJob } = require('../controllers/employeeLastJobController');
const {createEmployeeLastJobValidator} = require('../validations/employeeLastJobValidator')
const router = express.Router();

router.route('/')
.post(createEmployeeLastJobValidator,createEmployeeLastJob)
.get(getAllEmployeeLastJobs)

router.route('/:id')
.get(getEmployeeLastJob)
.put(updateEmployeeLastJob)

router.route('/:code')
.delete(deleteEmployeeLastJob)


module.exports = router;