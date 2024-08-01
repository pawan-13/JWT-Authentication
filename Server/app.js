import express from 'express';
const app = express();
const port = 3000;
import './db/connection.js';
import router from './routes/router.js';
import cors from 'cors';


app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port,()=>{
    console.log(`Server Started on : ${port}`);
})