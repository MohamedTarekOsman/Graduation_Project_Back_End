const asyncHandler=require('express-async-handler')
const Message = require('../models/MessageModel')

const createMessage=asyncHandler(async(req, res)=>{
        const message=await Message.create(req.body)
        res.status(200).json({data: message})
    })

const getAllMessages=asyncHandler(async(req, res)=>{
    const message=await Message.find({})
    res.status(200).json({data: message})
})

const getMessage=asyncHandler(async(req, res)=>{
    const message=await Message.findById(req.params.id)
    res.status(200).json({data: message})
})

const updateMessage=asyncHandler(async(req, res)=>{
    const message=await Message.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json({data: message})
})

const deleteMessage=asyncHandler(async(req, res)=>{
    const message=await Message.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "Message deleted successfully"})
})

const deleteMessagesBetweenUsers = asyncHandler(async (req, res) => {
    try {
      const { sender, receiver } = req.body;
      const result = await Message.deleteMany({
        $or: [
          { sender: sender, receiver: receiver },
          { sender: receiver, receiver: sender }
        ]
      });
      res.status(200).json({ message: "Messages deleted successfully", deletedCount: result.deletedCount });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete messages", error });
    }
  })

module.exports ={
    createMessage,
    getAllMessages,
    getMessage,
    updateMessage,
    deleteMessage,
    deleteMessagesBetweenUsers
}