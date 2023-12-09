const userRoute=require('./userRoute')
const authRoute=require('./authRoute')
const agendaRoute=require('./agendaRoute')
const attachment=require('./attachmentRoute')

const mountRoutes=(app)=>{
    app.use("/api/v1/users",userRoute)
    app.use("/api/v1/auth",authRoute)
    app.use("/api/v1/agenda",agendaRoute)
    app.use("/api/v1/attachment",attachment)
}

module.exports =mountRoutes