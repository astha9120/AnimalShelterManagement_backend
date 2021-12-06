const express = require("express")
const Pet = require('../models/pet')
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path')

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'upload_pet')
	},
	filename: (req, file, cb) => {
		cb(null,"photo.jpg")
	}
});

var upload = multer({ storage: storage });


const getPet = async(req,res)=>{
    try {
        const pets = await Pet.find({});
        console.log("pets")
        res.status(200)
        res.send(pets)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}


const postPet = async(req,res)=>{

    var obj = {
        type: req.body.type,
        breed: req.body.breed,
        color:req.body.color,
        weight:req.body.weight,
        age:req.body.age,
        location:req.body.location,
        description:req.body.description,
        status:req.body.status,
        photo: {
            data: fs.readFileSync(path.join(path.resolve("./") +'\\upload_pet\\photo.jpg')),
            contentType: 'image/jpg'
        }
    }

    const answer  = await Pet.insertMany(obj);
    const id = answer[0]._id;
    res.status(200)
    res.send(id)
}



router.route('')
      .get(getPet)
      .post(upload.single('file'),postPet)

module.exports = router

