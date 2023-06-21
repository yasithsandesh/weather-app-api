const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },

  lname: {
    type: String,
    required: true,
  },

  loc:{
    type:String,
    required:true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  mobile: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;