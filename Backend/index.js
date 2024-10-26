
const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const mongoDB =require('./config/mongodb.js')
const connectCludinary =require('./config/cloundinary.js')
const adminRouter = require('./Routes/admin.routes.js')

const app=express();
dotenv.config({})

const corsOptions={
    origin:"http://localhost:5173",
    Credentials:true

}
const PORT=process.env.PORT

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(corsOptions))


// cloudinary
connectCludinary()

// api
app.use('/api/admin',adminRouter)

app.listen(PORT,()=>{
    mongoDB()
    
    console.log(`server started at ${PORT}`)
})