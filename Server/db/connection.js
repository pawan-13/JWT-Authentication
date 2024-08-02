import mongoose from "mongoose";
const DB = "mongodb+srv://pawan30:Googletest@cluster0.pc52w4a.mongodb.net/Authusers?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB).then(()=> console.log('DataBase is Connected')).catch((error)=>console.log(error));