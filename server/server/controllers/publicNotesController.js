const asyncHandler=require('express-async-handler')
const PublicNotes = require('../models/PublicNotesModel')

const createPublicNotes=asyncHandler(async(req, res)=>{
        const publicNotes=await PublicNotes.create(req.body)
        res.status(200).json({data: publicNotes})
    })

const getAllPublicNotess=asyncHandler(async(req, res)=>{
    const publicNotes=await PublicNotes.find({})
    res.status(200).json({data: publicNotes})
})

const getPublicNotes=asyncHandler(async(req, res)=>{
    const publicNotes=await PublicNotes.findById(req.params.id)
    res.status(200).json({data: publicNotes})
})

const updatePublicNotes=asyncHandler(async(req, res)=>{
    const publicNotes=await PublicNotes.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json({data: publicNotes})
})

const deletePublicNotes=asyncHandler(async(req, res)=>{
    const publicNotes=await PublicNotes.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "PublicNotes deleted successfully"})
})

module.exports ={
    createPublicNotes,
    getAllPublicNotess,
    getPublicNotes,
    updatePublicNotes,
    deletePublicNotes
}