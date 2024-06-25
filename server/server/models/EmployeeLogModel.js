const mongoose=require('mongoose')


const employeeLogSchema=new mongoose.Schema({
    user_id  :{
        type:Number,
        required:[true,"user_id is required"]
    },
    day :{
        type:String,
        maxlength:[255,"Too Long day "],
    },
    mission_name :{
        type:String,
        maxlength:[255,"Too Long mission_name "],
    },
    mission_address :{
        type:String,
        maxlength:[255,"Too Long mission_address"],
    },
    transfers :{
        type:Number,
    },
    expenses :{
        type:Number,
    },
},{
    timestamps:true,
})


const EmployeeLog = mongoose.model("EmployeeLog", employeeLogSchema);
module.exports=EmployeeLog;