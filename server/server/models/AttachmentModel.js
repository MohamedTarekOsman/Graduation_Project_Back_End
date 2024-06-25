const mongoose=require('mongoose')


const attachmentSchema=new mongoose.Schema({
    receiver   :{
        type:String,
        maxlength:[255,"Too Long receiver "],
    },
    file_name     :{
        type:String,
        maxlength:[255,"Too Long file_name "],
        required:[true,"file_name is required"]
    },
    file_location   :{
        type:String,
        maxlength:[255,"Too Long file_location "],
        required:[true,"file_location is required"]
    },
    file_type    :{
        type:String,
        maxlength:[50,"Too Long file_type "],
        required:[true,"file_type is required"]
    },
    file_size    :{
        type:String,
        required:[true,"file_size is required"]
    },
    description    :{
        type:String,
    },
    read    :{
        type:Boolean,
        default:false,
    },
},{
    timestamps:true,
})


const Attachment = mongoose.model("Attachment", attachmentSchema);
module.exports=Attachment;