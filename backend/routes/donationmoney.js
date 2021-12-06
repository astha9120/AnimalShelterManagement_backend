const express = require("express")
const Donationmoney = require('../models/donation')
const router = express.Router()

const money = async(req,res)=>{
    try{
        var object={
            email:req.body.email,
            money:req.body.money,
            cause:req.body.cause
        }

        const answer  = await Donationmoney.insertMany(object);
        const id = answer[0]._id;
        console.log(answer)
        res.status(200)
        res.send(id)

    }catch(error){
        console.log(error)
        res.status(404)
    }
}

router.route('').post(money)
module.exports = router