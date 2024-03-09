const mongoose=require('mongoose')


const tasksSchema=new mongoose.Schema({
    registration_date:{
        type:String,
        maxlength:[255,"Too Long registration_date"],
    },
    company_name:{
        type:String,
        required:true,
        maxlength:[255,"Too Long company_name"],
    },
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
    comment:{
        type:String,
    },
    sent  :{
        type:Boolean,
        default:false,
    },
    status  :{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending',
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    completed  :{
        type:String,
        default:false,
    },
    sub_status  :{
        type:String,
        enum:['waiting','pending','ready','finished'],
        default:'pending',
    },
    execTime:{
        type:Number,
        default:0
    }
    //exec for each task - working hour - each employee have total execution time 
},{
    timestamps:true,
})


const Tasks = mongoose.model("Tasks", tasksSchema);
module.exports=Tasks;