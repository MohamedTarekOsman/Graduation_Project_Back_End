const mongoose=require('mongoose')


const agendaSchema=new mongoose.Schema([
    {
        task_code:{
            type:String
        },
        task_date:{
            type:Date
        }
    }
],{
    timestamps:true,
})


const Agenda = mongoose.model("Agenda", agendaSchema);
module.exports=Agenda;