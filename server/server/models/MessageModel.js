const mongoose=require('mongoose')


const messageSchema=new mongoose.Schema({
    sender    :{
        type:String,
        maxlength:[255,"Too Long sender "],
    },
    receiver    :{
        type:String,
        maxlength:[255,"Too Long receiver "],
    },
    message  :{
        type:String,
    },
},{
    timestamps:true,
})


const Message = mongoose.model("Message", messageSchema);
module.exports=Message;