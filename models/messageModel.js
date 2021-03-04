const mongoose = require("mongoose")
const messagesSchema={
    email:String,
    fullname:String,
    msg:String
}
const Message=mongoose.model("Message",messagesSchema)
module.exports=Message 