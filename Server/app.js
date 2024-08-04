import express from 'express';
import './db/connection.js';
import router from './routes/router.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();
const port = 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);

app.listen(port,()=>{
    console.log(`Server Started on : ${port}`);
})