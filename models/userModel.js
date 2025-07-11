const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type: String, require: true},

    email:{type:String, unique:true},
    
    password:{type:String}
});

const User = new mongoose.model("user",userSchema);

module.exports = User;