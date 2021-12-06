const express = require("express")
const User= require('../models/users')
const router = express.Router()

const signin= async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email,password:req.body.password})
        console.log(user)
        if(user){
            res.send("correct")
            res.status(200)
        }
        else{
            res.send("incorrect")
            res.status(200)
        }
        
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

const signup= async(req,res)=>{
    console.log(req.body)
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        contact:req.body.contact
    })
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

router.route('/in').post(signin)
router.route('/up').post(signup)

module.exports = router