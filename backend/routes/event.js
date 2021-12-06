const express = require("express")
const Event = require("../models/event")
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path')

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null,"photo.jpg")
	}
});

var upload = multer({ storage: storage });


const getEvent = async(req,res)=>{
    try {
        const events = await Event.find({});
        console.log(events)
        res.status(200)
        res.send(events)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}


const postEvent = async(req,res)=>{

    var obj = {
        name: req.body.name,
        description: req.body.description,
        date:req.body.date,
        location:req.body.location,
        photo: {
            data: fs.readFileSync(path.join(path.resolve("./") +'\\uploads\\photo.jpg')),
            contentType: 'image/jpg'
        }
    }

    const answer  = await Event.insertMany(obj);
    const id = answer[0]._id;
    res.status(200)
    res.send(id)
}



router.route('')
      .get(getEvent)
      .post(upload.single('file'),postEvent)

module.exports = router

