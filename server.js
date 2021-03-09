const express =require("express")
const app =express()
const cors =require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
require('dotenv').config()
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}
))
app.use(express.json())
const port=process.env.PORT || 8080
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connented to Mongo Db")
})
app.use("/",require("./routes/messageRoute"))

app.listen(port,function(){
    console.log(`App is Running on port ${port}`)
    
})