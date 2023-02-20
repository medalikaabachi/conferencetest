const express = require("express")

const router = express.Router()

const User = require('../models/user')

const bcrypt = require('bcrypt')

const jwt = require("jsonwebtoken")

// Require the isAuth middleware
const isAuth=require("../middleware/isAuth")
const isAdmin = require('../middleware/isAdmin')

router.post("/register",async(req,res)=>{
    const{name,lastName,email,password,image}=req.body
    let user=await User.findOne({email})

    if(user){
     return   res.send({msg:"email already exist!"})
    }

    user= new User({name,lastName,email,password,image})
const salt=10

const hashedpassword=await bcrypt.hash(password,salt)

user.password=hashedpassword


await user.save()
const payload={
    id:user._id
}
const token=await jwt.sign(payload,'kklt')



res.send({msg:"user registered !",user,token})


})


//login user
router.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        return res.send({msg:"bad credentials !email"})
  
    }
    const isMatch=await bcrypt.compare(password,user.password)

if(!isMatch){
    return res.send({msg:"bad credantials!passwoerd"})
}

const payload={id:user._id}
const token=await jwt.sign(payload,"kklt")






    res.send({msg:"login with success!",user,token})
})



//@route GET api/auth/user
//@desc Get authentified user
//@access Private
//get auth user

router.get("/user",isAuth,(req,res)=>{
    res.send({user:req.user})
    })
    
    
    
    

module.exports = router