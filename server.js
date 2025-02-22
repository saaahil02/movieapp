const express= require('express')

const moragan=require('morgan')
const dotenv=require("dotenv")
const connectDB =require("./config/db")
//const userroute=require('./routes/userRoutes');

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object 
const app=express()

//middlewares
app.use(express.json())
app.use(moragan('dev'))

//routes
app.use('/api/v1/user',require('./routes/userRoutes'));

// port
const port=process.env.PORT || 8080;

//listen port
app.listen(port,()=>{
    console.log(`server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT} `)
})