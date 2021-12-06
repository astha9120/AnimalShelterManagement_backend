const express = require("express")
const Donationpet = require('../models/donation_pet')
const router = express.Router();

const pet = async(req,res)=>{
    try{

        var object ={
            email:req.body.email,
            type:req.body.type,
            breed:req.body.breed,
            color:req.body.color,
            weight:req.body.weight,
            age:req.body.age,
            description:req.body.desc,
            time:req.body.time
        }
        const answer  = await Donationpet.insertMany(object);
        const id = answer[0]._id;
        console.log(answer)
        res.status(200)
        res.send("correct")

    }catch(error){
        console.log(error)
        res.send("incorrect")
        res.status(404)
    }
}

router.route('').post(pet)

module.exports = router;
