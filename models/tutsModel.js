const mongoose = require("mongoose")
const tutsSchema = {
    tutsimage:String,
    tutsname:String,
    tutscontent:String,
    tutsbuttonlinkyt:String,
    tutsbuttonlinkgithub:String
}
const Tutorials=mongoose.model("tutorial",tutsSchema)
module.exports=Tutorials