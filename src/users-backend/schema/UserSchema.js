const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    email_address:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        index:true
    },
    phone:Number,
    address:String,
    description:String,
    registrationDate:{
        type:Date,
        required:true
    }
})

module.exports = mongoose.models('User', userSchema)