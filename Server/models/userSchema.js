import mongoose from "mongoose";
import validator from 'validator';

const userSchema =  new mongoose.Schema({
      name:{
        type:String,
        required:true,
        trim:true,
      },
      email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email');
            }
        }
      },
      password:{
        type:String,
        required:true,
        minlength:6,
      },
      token:[
        {
            token:{
                type:String,
                required:true,
            }
        }
      ]
});

//creating model
const userdb = new mongoose.model("users",userSchema);
module.exports = userdb;