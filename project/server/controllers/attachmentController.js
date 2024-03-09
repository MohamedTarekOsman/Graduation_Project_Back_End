const asyncHandler=require('express-async-handler')
const Attachment = require('../models/AttachmentModel')

const createAttachment=asyncHandler(async(req, res)=>{
        const attachment=await Attachment.create(req.body)
        res.status(200).json({data: attachment})
    })

const getAllAttachments=asyncHandler(async(req, res)=>{
    const attachment=await Attachment.find({})
    res.status(200).json({data: attachment})
})

const getAttachment=asyncHandler(async(req, res)=>{
    const attachment=await Attachment.findById(req.params.id)
    res.status(200).json({data: attachment})
})

const updateAttachment=asyncHandler(async(req, res)=>{
    const attachment=await Attachment.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json({data: attachment})
})

const deleteAttachment=asyncHandler(async(req, res)=>{
    const attachment=await Attachment.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "Attachment deleted successfully"})
})

module.exports ={
    createAttachment,
    getAllAttachments,
    getAttachment,
    updateAttachment,
    deleteAttachment
}