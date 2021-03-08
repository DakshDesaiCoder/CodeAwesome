const express =require("express")
const app =express()
const cors =require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}
))
app.use(express.json())
const port=8080
mongoose.connect("mongodb://localhost:27017/codeawesome",{
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