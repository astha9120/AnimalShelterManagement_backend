const express = require("express")
const Adoption = require('../models/adoption')
const router = express.Router();

const adopt = async(req,res)=>{
    try{
        console.log(req.body)
        var object ={
            email:req.body.email,
            type:req.body.type,
            breed:req.body.breed,
            color:req.body.color,
            weight:req.body.weight,
            age:req.body.age,
            description:req.body.description,
            time:req.body.time
        }
        const answer  = await Adoption.insertMany(object);
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

router.route('').post(adopt)

module.exports = router;
