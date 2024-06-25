const mongoose=require('mongoose')


const noteSchema=new mongoose.Schema({
    user_id :{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"user_id is required"],
        ref:'User'
    },
    content  :{
        type:String,
        maxlength:[255,"Too Long content "],
        required:[true,"content is required"]
    },
    datetime  :{
        type:String,
        maxlength:[50,"Too Long datetime "],
        required:[true,"datetime is required"]
    },
    seen  :{
        type:Boolean,
        default:false,
    },
    minutes_timer :{
        type:Number,
    },

},{
    timestamps:true,
})


const Note = mongoose.model("Note", noteSchema);
module.exports=Note;