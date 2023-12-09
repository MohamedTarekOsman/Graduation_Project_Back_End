const mongoose=require('mongoose')


const agendaSchema=new mongoose.Schema({
    company_name  :{
        type:String,
    },
    code   :{
        type:String,
    },
    department   :{
        type:String,
    },
    additional_information  :{
        type:String,
        maxlength:[255,"Too Long additional_information "],
    },
    next_action   :{
        type:String,
    },
    required_documents   :{
        type:String,
    },
    execution_date  :{
        type:String,
    },
    archived   :{
        type:Boolean,
        default:false,
    },
    
},{
    timestamps:true,
})


const Agenda = mongoose.model("Agenda", agendaSchema);
module.exports=Agenda;