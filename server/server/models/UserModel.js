const  mongoose  = require("mongoose");
const bcrypt =require("bcryptjs");
const userSchema=new mongoose.Schema({
    username :{
        type:String,
        required:[true,"username is required"],
        unique:[true,"username must be unique"],
        maxlength:[50,"Too Long username"],
    },
    password :{
        type:String,
        required:[true,"password is required"],
        maxlength:[50,"Too Long password"],
    },
    role :{
        type:String,
        enum:['admin','manager', 'employee'],
        maxlength:[10,"Too Long role"],
        required:[true,"role is required"],
    },
    reviewed  :{
        type:Boolean,
        default:false,
    },
    first_name  :{
        type:String,
        maxlength:[50,"Too Long name"],
    },
    last_name  :{
        type:String,
        maxlength:[50,"Too Long name"]
    },
    employee_date  :{
        type:Date,
    },
    seen :{
        type:Boolean,
        default:false,
    },
    last_seen :{
        type:Date,
    },
    short_info   :{
        type:String,
        maxlength:[50,"Too Long short_info"]
    },
    last_sent_msg :{
        type:Date,
    },
},{
    timestamps:true,
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){ return next();}
    this.password = await bcrypt.hash(this.password,8)
    next()
})

const User = mongoose.model("User", userSchema);
module.exports=User;