const mongoose=require('mongoose')


const tasksSchema=new mongoose.Schema({
    code:{
        type:String,
        unique:[true,'code is unique'],
        uniqueCaseInsensitive: false,
        required:true,
    },
    department:{
        type:String,
        maxlength:[255,"Too Long department"],
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    info:{
        type:String,
        maxlength:[255,"Too Long info"],
    },
    notes:{
        type:String,
    },
    status  :{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending',
    },
    sent  :{
        type:Boolean,
        default:false,
    },
    completed  :{
        type:String,
        default:false,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    //exec for each task - working hour - each employee have total execution time 
},{
    timestamps:true,
})


const Tasks = mongoose.model("Tasks", tasksSchema);
module.exports=Tasks;