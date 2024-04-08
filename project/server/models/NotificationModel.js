const mongoose=require('mongoose')


const notificationSchema=new mongoose.Schema({
    user_id:{
        type:String,
        required:[true,"user_id is required"],
        ref:"User"
    },
    sender_name :{
        type:String,
        maxlength:[50,"Too Long sender_name"],
        required:[true,"user_id is required"],
    },
    message  :{
        type:String,
        maxlength:[200,"Too Long message"],
        required:[true,"message is required"],
    },
    message_type  :{
        type:String,
        maxlength:[20,"Too Long message_type"],
        required:[true,"message_type is required"],
    },
    url  :{
        type:String,
        maxlength:[200,"Too Long url"],
        required:[true,"url is required"],
    },
    read  :{
        type:Boolean,
        default:false,
    },
},{
    timestamps:true,
})


const Notification = mongoose.model("Notification", notificationSchema);
module.exports=Notification;