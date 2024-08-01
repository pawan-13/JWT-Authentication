import express from 'express';
const router = new express.Router();
import userdb from '../models/userSchema.js';

router.post('/signup', async(req, res) => {
    const{name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).send({error: "Please fill in all fields."});
    }

    try {
        const preuser = await userdb.findOne({email:email});
        if(preuser){
            return res.status(400).send({error: "Email already in use."});
        }
        else{
            const finaluser = new userdb({
                name,email,password
            });

            finaluser.save();
        }
    } catch (error) {
        console.log(error);
    }
});

export default router;