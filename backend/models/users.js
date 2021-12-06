const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const userSchema= new Schema({
    name:{
      type:String,
      required:[true,"please enter your name"],
    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please enter an password'],
    },
    address:{
        type:String,
        required:[true,'please enter your address']
    },
    contact:{
        type:String,
        required:[true,'please enter your contact number']
    }
})


module.exports=mongoose.model('users',userSchema);