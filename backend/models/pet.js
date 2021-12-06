const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const petSchema= new Schema({
    type:{
        type:String,
        required:true
    },
    breed:{
        type:String
    },

    color:{
        type:String
    },

    weight:{
        type:String
    },

    age:{
        type:Number
    },

    description:{
        type:String
    },
    location:{
        type:String,
        required:true
    },
    status:{
        type:String
    },
    photo:{
        data:Buffer,
        Type:String
    }
})

module.exports=mongoose.model('pets',petSchema);