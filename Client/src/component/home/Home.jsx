import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const dashBoard = () => {
    let token = localStorage.getItem("usersdatatoken");
    const res= axios.get('/validuser',{
      headers:{
        "Content-Type":"application/json",
        "authorization":token
      }
    });
    console.log(res);
    
  }
  useEffect(()=>{
    dashBoard();
  },[]);
  return (
    <div>
        <h1>Welcome to the dashBoard!</h1>
        <p>You have learn Jwt Authencation very well</p>
    </div>
  )
}
export default Home;