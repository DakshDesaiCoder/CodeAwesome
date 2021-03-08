const express = require("express")
const bcrypt = require("bcrypt")
const router=express.Router()
const jwt = require("jsonwebtoken")
const Login = require("../models/AdminLoginModel")
const Message=require("../models/messageModel.js")
const { json } = require("express")
const cookieParser = require("cookie-parser")
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

router.post("/login",async(req,res)=>{
    try{
        const email=req.body.email
        const password=req.body.password

        const adminmail = await Login.findOne({email:email})
        const adminpass = adminmail.password
        console.log(adminmail.password)
    
        const hashedpassmatch = await bcrypt.compare(password,adminpass)
        if(hashedpassmatch == true){
            console.log("Password Matched");
            const token =await  jwt.sign({
                user: adminmail._id
            },"$2b$12$E.etQ.gpz.lRuJcUhKarjOSuGzkgu8HEkvAv3tEaTdOium6D4rnM2")
            console.log(`Cookie Token: ${token}`)
            res
            .cookie("Token",token,{
                httpOnly:true
            })
            .send()

        }else{
            console.log("Invalid Login Details");
        }
    }catch(err){
        res.sendStatus(400)
    }
})
router.get("/logout",(req,res)=>{
    res
        .cookie("token","",{
            httpOnly:true,
            expires: new Date(0)
        })
        .send()
})
router.get("/loggedIn",async(req,res)=>{
    try{
        const {cookies} = req
        const cookiecheck= cookies.Token
        console.log(`Cookie Recived :${cookiecheck}`)
        if(!cookiecheck) return res.json(false)
        jwt.verify(cookiecheck,"$2b$12$E.etQ.gpz.lRuJcUhKarjOSuGzkgu8HEkvAv3tEaTdOium6D4rnM2")
        res.send(true)
        console.log("logged in")
    }catch(err){
        console.log(`Error: ${err}`)
        res.json(false)
    }
})
module.exports=router;