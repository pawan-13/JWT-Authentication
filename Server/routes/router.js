import express from 'express';
const router = new express.Router();

//for user registration
router.post('/signup', (req, res) => {
    console.log(req.body);
});

export default router;