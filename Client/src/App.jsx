import Home from "./component/home/Home";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import "./component/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("usersdatatoken");
  console.log(token, "app");
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={token ? <Home /> : <Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dash" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
