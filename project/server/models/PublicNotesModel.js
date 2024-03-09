const mongoose=require('mongoose')


const publicNotesSchema=new mongoose.Schema({
    written_by  :{
        type:String,
        maxlength:[50,"Too Long written_by "],
        required:[true,"written_by is required"]
    },
    content  :{
        type:String,
        required:[true,"content is required"]
    },
    datetime  :{
        type:String,
        maxlength:[50,"Too Long datetime "],
        required:[true,"datetime is required"]
    },
    note_type   :{
        type:String,
        maxlength:[50,"Too Long note_type "],
        required:[true,"note_type is required"]
    },
    emp_last_job_id  :{
        type:Number,
    },

},{
    timestamps:true,
})


const PublicNotes = mongoose.model("PublicNotes", publicNotesSchema);
module.exports=PublicNotes;