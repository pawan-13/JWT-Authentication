import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const dashBoard = async () => {
    const token = localStorage.getItem("usersdatatoken");
    console.log("pawan", token);

    const res = await axios.get("http://localhost:8000/validateUser", {
      headers: {
        Authorization: token,
      },
    });
  };
  useEffect(() => {
    dashBoard();
  }, []);
  return (
    <div>
      <h1>Welcome to the dashBoard!</h1>
      <p>You have learn Jwt Authencation very well</p>
    </div>
  );
};
export default Home;
