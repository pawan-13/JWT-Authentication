const express = require('express');
const app = express()
const port = 8000;

app.get('/',(req,res)=>{
    res.status(200).json({
        "id":"2",
        "name":"pawan",
        "last":"kumar",
    });
});

app.listen(port,()=>{
    console.log(`Server Started on : ${port}`);
})