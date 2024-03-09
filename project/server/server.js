const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const cors=require('cors');
const app = express();
app.use(express.json());
app.options('*', cors());
app.use(cors());
const  mounteRoutes=require('./routes')
//custom modules
dotenv.config({path:"config.env"})


// connect to the database
const dbconnection = require('./config/database');
dbconnection()


// Mount Routes
mounteRoutes(app)

//show mode 
if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"));
    console.log(`mode : ${process.env.NODE_ENV}`)
}



//listen to db with specific port
const port=process.env.PORT||8000
const server=app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

//Handel Rejection outside of express
process.on("unhandledRejection",(err)=>{
    console.error(`unhandledRejection Errors : ${err.name}|${err.message}`);
    server.close(()=>{
        console.error(`Shutting down ....`)
        process.exit(1);
    })
    
})