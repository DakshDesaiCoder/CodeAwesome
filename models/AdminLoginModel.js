const mongoose = require("mongoose")
const adminlogSchema = {
    email:String,
    password:String
}
const AdminLogin=mongoose.model("Admin",adminlogSchema)
module.exports=AdminLogin