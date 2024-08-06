import express from 'express';
import bcryptjs from 'bcryptjs';
import userdb from '../models/userSchema.js';
import authenticate from '../middleware/authenticate.js';

const router = new express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    
    console.log('Signup request body:', req.body); // Logging request payload

    if (!name || !email || !password) {
        return res.status(400).send({ error: "Please fill in all fields." });
    }

    try {
        const preuser = await userdb.findOne({ email: email });
        if (preuser) {
            return res.status(400).send({ error: "Email already in use." });
        }

        const hashedPassword = await bcryptjs.hash(password, 12);
        const finaluser = new userdb({ name, email, password: hashedPassword });

        const storeData = await finaluser.save();
        return res.status(200).json({ status: 200, storeData });

    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    console.log('Login request body:', req.body); // Logging request payload

    if (!email || !password) {
        return res.status(400).json({ error: "Please fill in all fields." });
    }

    try {
        const userValid = await userdb.findOne({ email: email });
        if (!userValid) {
            return res.status(400).json({ error: "Invalid email." });
        }

        const isMatch = bcryptjs.compare(password, userValid.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid password." });
        }

        const token = await userValid.generateAuthtoken();

        res.cookie("userCookie", token, {
            expires: new Date(Date.now() + 9000000),
            httpOnly: true
        });

        return res.status(200).json({ status: 200, message: "Login successful", token });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

//user valid

router.get('/validuser',authenticate,async(req,res)=>{
console.log('done');
})

export default router;
