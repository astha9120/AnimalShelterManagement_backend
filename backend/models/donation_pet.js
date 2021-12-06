const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const donationpetSchema= new Schema({
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
        type:Number
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

module.exports=mongoose.model('donation_pet',donationpetSchema);
