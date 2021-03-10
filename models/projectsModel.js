const mongoose = require("mongoose")
const projectsSchema = {
    projectsimage:String,
    projectsname:String,
    projectscontent:String,
    projectsbuttonlinkyt:String,
    projectsbuttonlinkgithub:String
}
const Projects=mongoose.model("project",projectsSchema)
module.exports=Projects
