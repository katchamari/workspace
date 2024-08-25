// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const Users = new Schema({
  username:{type:String, required:true},
  password:{type:String, required:true},
  email:{type:String, required:true}
});

const SomeModel = mongoose.model("Users", Users);