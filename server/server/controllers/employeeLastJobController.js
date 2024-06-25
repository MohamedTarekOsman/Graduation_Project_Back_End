const asyncHandler=require('express-async-handler')
const EmployeeLastJob = require('../models/EmployeeLastJobModel')

const createEmployeeLastJob=asyncHandler(async(req, res)=>{
        const employeeLastJob=await EmployeeLastJob.create(req.body)
        res.status(200).json({data: employeeLastJob})
    })

const getAllEmployeeLastJobs=asyncHandler(async(req, res)=>{
    const employeeLastJob=await EmployeeLastJob.find({})
    res.status(200).json({data: employeeLastJob})
})

const getEmployeeLastJob=asyncHandler(async(req, res)=>{
    const employeeLastJob=await EmployeeLastJob.findById(req.params.id)
    res.status(200).json({data: employeeLastJob})
})

const updateEmployeeLastJob=asyncHandler(async(req, res)=>{
    const employeeLastJob=await EmployeeLastJob.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json({data: employeeLastJob})
})

const deleteEmployeeLastJob=asyncHandler(async(req, res)=>{
    const employeeLastJob=await EmployeeLastJob.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "EmployeeLastJob deleted successfully"})
})

module.exports ={
    createEmployeeLastJob,
    getAllEmployeeLastJobs,
    getEmployeeLastJob,
    updateEmployeeLastJob,
    deleteEmployeeLastJob
}