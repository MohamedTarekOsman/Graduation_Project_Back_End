const mongoose=require('mongoose')


const filesSchema=new mongoose.Schema({
    company_name     :{
        type:String,
        maxlength:[255,"Too Long company_name "],
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
    }
    ,description    :{
        type:String,
    },
},{
    timestamps:true,
})


const Files = mongoose.model("Files", filesSchema);
module.exports=Files;