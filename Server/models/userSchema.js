import mongoose from "mongoose";
import validator from 'validator';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';

const Keysecret = "pawankumarrikhari"

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
      tokens:[
        {
            token:{
                type:String,
                required:true,
            }
        }
      ]
});

//hash Password
userSchema.pre('save',async function(next){
  this.password = await bcryptjs.hash(this.password,12);
  next();
});

userSchema.methods.generateAuthtoken = async function() {
  try {
     let token12 = jwt.sign({_id:this._id},Keysecret,{
      expiresIn:"1d"
     });

     this.tokens = this.tokens.concat({token:token12});
     await this.save();
     return token12;
  } catch (error) {
    res.status(400).json({error:"error"});    
  }
}

//creating model
const userdb = new mongoose.model("users",userSchema);
export default userdb;