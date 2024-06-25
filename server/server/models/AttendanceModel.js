const mongoose=require('mongoose')


const attendanceSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    userName:{
        type:String,
        required:true,
    },
    isEditable:{
        type:Boolean,
        default:false,
    },
},{
    timestamps:true,
})

attendanceSchema.pre(/^find/,function (next){
    this.populate({
        path:'userId',
        select:'role username',
    });
    next();
})
const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports=Attendance;