const mongoose=require('mongoose')


const noneCodeWalletSchema=new mongoose.Schema({
    received_amount   :{
        type:Number,
    },
    company_name   :{
        type:String,
        maxlength:[255,"Too Long company_name "],
    },
    focus_note    :{
        type:String,
        maxlength:[255,"Too Long focus_note "],
        required:[true,"focus_note is required"]
    },
},{
    timestamps:true,
})


const NoneCodeWallet = mongoose.model("NoneCodeWallet", noneCodeWalletSchema);
module.exports=NoneCodeWallet;