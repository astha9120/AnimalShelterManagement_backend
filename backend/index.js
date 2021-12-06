const express = require("express");
const cors = require('cors');
const mongoose=require('mongoose');
const bodyParser = require("body-parser");

const login = require('./routes/login') 
const donationpet = require('./routes/donationpet')
const donationmoney = require('./routes/donationmoney')
const adoption=require('./routes/adoption')
const caretaker = require('./routes/caretaker')
const event = require('./routes/event')
const pet = require('./routes/pet')


require('dotenv').config();
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_CONNECT,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("DB connected")
  }).catch((error)=>{
    console.log("mondb not connected");
    console.log(error);
});


app.use('/login',login);
app.use('/donation_pet',donationpet);
app.use('/donation_money',donationmoney);
app.use('/adoption',adoption)
app.use('/caretaker',caretaker)
app.use('/event',event)
app.use('/pet',pet)


app.listen(port,()=>{
    console.log(`Listening to port 4000`)
})