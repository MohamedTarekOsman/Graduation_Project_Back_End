const mongoose=require('mongoose')


const employeeLastJobSchema=new mongoose.Schema({
    code   :{
        type:String,
        maxlength:[255,"Too Long code "],
        required:[true,"code is required"]
    },
    date    :{
        type:String,
        maxlength:[255,"Too Long date "],
    },
    company_name    :{
        type:String,
        maxlength:[255,"Too Long company_name "],
    },
    commission_name    :{
        type:String,
        maxlength:[255,"Too Long commission_name "],
    },
    subject    :{
        type:String,
        maxlength:[255,"Too Long subject "],
    },
    transfers    :{
        type:Number,
    },
    last_transfers    :{
        type:String,
        maxlength:[255,"Too Long last_transfers "],
    },
    employee_name    :{
        type:String,
        maxlength:[255,"Too Long employee_name "],
    },
    employee_username    :{
        type:String,
        maxlength:[255,"Too Long employee_username "],
    },
    notification_is_sent    :{
        type:Boolean,
        default:false,
    },
   
},{
    timestamps:true,
})


const EmployeeLastJob = mongoose.model("EmployeeLastJob", employeeLastJobSchema);
module.exports=EmployeeLastJob;