const express = require("express")
const Caretaker = require('../models/care_taker')
const router = express.Router();

const care = async(req,res)=>{
    try{

        var object ={
            email:req.body.email,
            type:req.body.type,
            breed:req.body.breed,
            color:req.body.color,
            weight:req.body.weight,
            age:req.body.age,
            description:req.body.desc,
            starttime:req.body.starttime,
            endtime:req.body.endtime
        }
        const answer  = await Caretaker.insertMany(object);
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

router.route('').post(care)

module.exports = router;
