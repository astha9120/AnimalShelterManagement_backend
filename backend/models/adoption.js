const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const adoptionSchema= new Schema({
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
    time:{
        type:Date,
        required:true
    }
})

module.exports=mongoose.model('adoption',adoptionSchema);
