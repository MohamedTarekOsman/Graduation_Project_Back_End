const asyncHandler=require('express-async-handler')
const EmployeeLog = require('../models/EmployeeLogModel')

const createEmployeeLog=asyncHandler(async(req, res)=>{
        const employeeLog=await EmployeeLog.create(req.body)
        res.status(200).json({data: employeeLog})
    })

const getAllEmployeeLogs=asyncHandler(async(req, res)=>{
    const employeeLog=await EmployeeLog.find({})
    res.status(200).json({data: employeeLog})
})

const getEmployeeLog=asyncHandler(async(req, res)=>{
    const employeeLog=await EmployeeLog.findById(req.params.id)
    res.status(200).json({data: employeeLog})
})

const updateEmployeeLog=asyncHandler(async(req, res)=>{
    const employeeLog=await EmployeeLog.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json({data: employeeLog})
})

const deleteEmployeeLog=asyncHandler(async(req, res)=>{
    const employeeLog=await EmployeeLog.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "EmployeeLog deleted successfully"})
})

module.exports ={
    createEmployeeLog,
    getAllEmployeeLogs,
    getEmployeeLog,
    updateEmployeeLog,
    deleteEmployeeLog
}