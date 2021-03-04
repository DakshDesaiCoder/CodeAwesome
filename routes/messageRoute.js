const express = require("express")
const router=express.Router()
const Message=require("../models/messageModel.js")
router.route("/create").post((req,res)=>{
    const email=req.body.email
    const fullname=req.body.fullname
    const msg=req.body.msg
    const newMessage=new Message({
        email,
        fullname,
        msg
    }) 
    newMessage.save()
})
module.exports=router;