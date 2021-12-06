const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const caretakerSchema= new Schema({
    email:{
        type:String,
        required:true
    },

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
    starttime:{
        type:Date,
        required:true
    },
    endtime:{
        type:Date,
        required:true
    }
})

module.exports=mongoose.model('care_taker',caretakerSchema);
