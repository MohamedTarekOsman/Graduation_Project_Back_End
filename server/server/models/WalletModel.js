const mongoose=require('mongoose')


const walletSchema=new mongoose.Schema({
    code   : {
        type:String,
        maxlength:[255,"Too Long code "],
        required:[true,"code is required"]
    },
    date    : {
        type:String,
    },
    company_name    :{
        type:String,
        maxlength:[255,"Too Long company_name "],
    },
    subject    :{
        type:String,
        maxlength:[255,"Too Long subject "],
    },
    amount_received_from_customer:{
        type:Number,
    },
    amount_out_of_wallet     :{
        type:String,
        maxlength:[255,"Too Long amount_out_of_wallet "],
    },
    actual_expense     :{
        type:Number,
    },
    remaining_balance     :{
        type:Number,
    },
    receiver    :{
        type:String,
    },
    received_from     :{
        type:String,
        maxlength:[255,"Too Long received_from "],
    },
    money_out_source     : {
        type:String,
    },
    status:{
        type:String,
    },
    notes     : {
        type:String,
        maxlength:[255,"Too Long notes "],
    },
},{
    timestamps:true,
})


const Wallet = mongoose.model("Wallet", walletSchema);
module.exports=Wallet;