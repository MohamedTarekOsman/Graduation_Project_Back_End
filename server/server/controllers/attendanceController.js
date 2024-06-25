const asyncHandler=require('express-async-handler')
const Attendance = require('../models/AttendanceModel')
const User = require('../models/UserModel')

const createAttendance=asyncHandler(async(req, res)=>{
    const attendance=await Attendance.create(req.body)
    const user=await User.findById(req.body.userId)
    if(!user){
        return res.status(404).json({error:"User not found"})
    }
    res.status(200).json({data: attendance})
    })

const getAllAttendances=asyncHandler(async(req, res)=>{
    const attendance=await Attendance.find({})
    res.status(200).json({data: attendance})
})

const getAttendance=asyncHandler(async(req, res)=>{
    const attendance=await Attendance.findById(req.params.id)
    if(!attendance){
        return res.status(404).json({error:"attendance not found"})
    }
    res.status(200).json({data: attendance})
})

const updateAttendance = asyncHandler(async (req, res) => {
    // Find the document first
    const existingAttendance = await Attendance.findById(req.params.id);
    if (!existingAttendance) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    // Update the document
    const updatedAttendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({ data: updatedAttendance });
  });
  
const deleteAttendance=asyncHandler(async(req, res)=>{
    const attendance=await Attendance.findByIdAndDelete(req.params.id)
    if(!attendance) {
        return res.status(404).json({error: 'Attendance not found'})
    }
    res.status(200).json({message: "Attendance deleted successfully"})
})

module.exports ={
    createAttendance,
    getAllAttendances,
    getAttendance,
    updateAttendance,
    deleteAttendance
}