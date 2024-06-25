const asyncHandler=require('express-async-handler')
const Note = require('../models/NoteModel')

const createNote=asyncHandler(async(req, res)=>{
        const note=await Note.create(req.body)
        res.status(200).json({data: note})
    })

const getAllNotes=asyncHandler(async(req, res)=>{
    const note=await Note.find({})
    res.status(200).json({data: note})
})

const getNote=asyncHandler(async(req, res)=>{
    const note=await Note.findById(req.params.id)
    res.status(200).json({data: note})
})

const updateNote=asyncHandler(async(req, res)=>{
    const note=await Note.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json({data: note})
})

const deleteNote=asyncHandler(async(req, res)=>{
    const note=await Note.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "Note deleted successfully"})
})

module.exports ={
    createNote,
    getAllNotes,
    getNote,
    updateNote,
    deleteNote
}