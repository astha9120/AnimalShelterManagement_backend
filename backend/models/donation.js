const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const donationSchema= new Schema({
    email:{
      type:String,
      required:true
    },
    money:{
        type:Number,
        required:true
    },
    cause:{
        type:String
    }
})


module.exports=mongoose.model('donation',donationSchema);