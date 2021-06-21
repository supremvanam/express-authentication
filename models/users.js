const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
  
  const userModel = new mongoose.Schema(
      {
    contactname: String,
    username:  String,
    password: String, 
    email: String,
    phone: Number,
    country: String,  
  }
);

  userModel.plugin(passportLocalMongoose);
  module.exports = new mongoose.model('user',userModel);