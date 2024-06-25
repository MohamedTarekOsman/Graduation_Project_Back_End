const asyncHandler=require('express-async-handler')
const Files = require('../models/FilesModel')

const createFiles=asyncHandler(async(req, res)=>{
        const files=await Files.create(req.body)
        res.status(200).json({data: files})
    })

const getAllFiless=asyncHandler(async(req, res)=>{
    const files=await Files.find({})
    res.status(200).json({data: files})
})

const getFiles=asyncHandler(async(req, res)=>{
    const files=await Files.findById(req.params.id)
    res.status(200).json({data: files})
})

const updateFiles=asyncHandler(async(req, res)=>{
    const files=await Files.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json({data: files})
})

const deleteFiles=asyncHandler(async(req, res)=>{
    const files=await Files.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "Files deleted successfully"})
})

module.exports ={
    createFiles,
    getAllFiless,
    getFiles,
    updateFiles,
    deleteFiles
}