const mongoose=require('mongoose')


const tasksSchema=new mongoose.Schema({
    registration_date :{
        type:String,
        maxlength:[255,"Too Long registration_date"],
    },
    company_name  :{
        type:String,
        maxlength:[255,"Too Long company_name"],
    },
    code  :{
        type:Number,
    },
    department  :{
        type:String,
        maxlength:[255,"Too Long department"],
    },
    subject  :{
        type:String,
    },
    comment  :{
        type:String,
    },
    sent  :{
        type:Boolean,
    },
    status  :{
        type:String,
        enum:['pending','accepted','rejected'],
    },
    completed  :{
        type:Boolean,
        default:false,
    },
    sub_status  :{
        type:String,
        enum:['waiting','pending','ready','finished'],
    },
},{
    timestamps:true,
})


const Tasks = mongoose.model("Tasks", tasksSchema);
module.exports=Tasks;