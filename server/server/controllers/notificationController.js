const asyncHandler=require('express-async-handler')
const Notification = require('../models/NotificationModel')

const createNotification=asyncHandler(async(req, res)=>{
        const notification=await Notification.create(req.body)
        res.status(200).json({data: notification})
    })

const getAllNotifications=asyncHandler(async(req, res)=>{
    const notification=await Notification.find({})
    res.status(200).json({data: notification})
})

const getNotification=asyncHandler(async(req, res)=>{
    const notification=await Notification.findById(req.params.id)
    res.status(200).json({data: notification})
})

const updateNotification=asyncHandler(async(req, res)=>{
    const notification=await Notification.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json({data: notification})
})

const deleteNotification=asyncHandler(async(req, res)=>{
    const notification=await Notification.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "Notification deleted successfully"})
})

module.exports ={
    createNotification,
    getAllNotifications,
    getNotification,
    updateNotification,
    deleteNotification
}