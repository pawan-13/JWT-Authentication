import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const dashBoard = async() => {
    let token = localStorage.getItem("usersdatatoken");
    console.log('pawan',token);
    
    const res= await axios.get('/validuser',{
      headers:{
        "Content-Type":"application/json",
        "Authorization":token
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