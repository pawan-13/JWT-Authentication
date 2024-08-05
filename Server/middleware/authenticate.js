import jwt from 'jsonwebtoken';
import userdb from '../models/userSchema.js';
 const Keysecret = "pawankumarrikhari";

const authenticate = async(req,res,next)=>{
  try {
    const token = req.headers.authorization;

    const verifytoken = jwt.verify(token,Keysecret);
    console.log(verifytoken);
    
  } catch (error) {
    
  }
}

export default authenticate;