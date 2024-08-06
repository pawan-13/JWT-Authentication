import jwt from 'jsonwebtoken';
import userdb from '../models/userSchema.js';

const Keysecret = "pawankumarrikhari";

const authenticate = (req, res, next) => {
  try {
      const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header is missing' });
    }

    const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
    console.log('Received token:', token);

    const verifytoken = jwt.verify(token, Keysecret);
    console.log('Verified token:', verifytoken);

    req.user = verifytoken;

    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default authenticate;
