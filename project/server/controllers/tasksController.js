const asyncHandler=require('express-async-handler')
const Tasks = require('../models/TasksModel')
const User = require('../models/UserModel')

// const currentDate = new Date().toLocaleDateString('en-GB', {
//     day: 'numeric',
//     month: 'numeric',
//     year: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     hour12: true
//   });
const createTasks=asyncHandler(async(req, res)=>{
//   {
//     company_name:req.body.company_name,
//     department:req.body.department,
//     subject:req.body.subject,
//     userId:req.body.userId,
//     comment:req.body.comment,
//     code:req.body.code,
//     registration_date:req.body.registration_date
// }
        const tasks=await Tasks.create(req.body)
        const user=await User.findById(req.body.userId)
        if(!user){
            return res.status(404).json({error:"User not found"})
        }
        res.status(200).json({data: tasks})
    })

const getAllTaskss=asyncHandler(async(req, res)=>{
    const tasks=await Tasks.find({})
    res.status(200).json({data: tasks})
})

const getTasks=asyncHandler(async(req, res)=>{
    const tasks=await Tasks.findById(req.params.id)
    if(!tasks){
        return res.status(404).json({error:"task not found"})
    }
    res.status(200).json({data: tasks})
})

const updateTasks = asyncHandler(async (req, res) => {
    // Find the document first
    const existingTask = await Tasks.findById(req.params.id);
    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    // Update the document
    const updatedTask = await Tasks.findByIdAndUpdate(
      req.params.id,
      {
        sent: req.body.sent,
        status: req.body.status,
        completed: req.body.completed,
      },
      {
        new: true,
        runValidators: true,
      }
    );
  
    // Calculate execTime using the timestamps of the updated document
    const execTime = ((updatedTask.updatedAt.getTime() - updatedTask.createdAt.getTime())/(60*60*1000)).toFixed(1);
  
    // Update the document again with the calculated execTime
    const taskWithExecTime = await Tasks.findByIdAndUpdate(
      req.params.id,
      { execTime: execTime },
      { new: true, runValidators: true }
    );
  
    res.status(200).json({ data: taskWithExecTime });
  });
  
const deleteTasks=asyncHandler(async(req, res)=>{
    const tasks=await Tasks.findByIdAndDelete(req.params.id)
    if(!tasks) {
        return res.status(404).json({error: 'Task not found'})
    }
    res.status(200).json({message: "Task deleted successfully"})
})

module.exports ={
    createTasks,
    getAllTaskss,
    getTasks,
    updateTasks,
    deleteTasks
}