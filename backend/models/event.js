const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const eventSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    photo:{
        data:Buffer,
        Type:String
    }
})

module.exports=mongoose.model('events',eventSchema);