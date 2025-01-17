const mongoose=require('mongoose')


const employeeLastJobSchema=new mongoose.Schema({
    code:{
        type:String,
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
        enum:['في انتظار القبول او الرفض',"تم الإرسال","لم ترسل",'تم القبول','مرفوض'],
        default:"لم ترسل",
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
        ref:'User',
    },
    report:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})


const EmployeeLastJob = mongoose.model("EmployeeLastJob", employeeLastJobSchema);
module.exports=EmployeeLastJob;