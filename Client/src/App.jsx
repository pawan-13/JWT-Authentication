import Login from "./component/Login"
import SignUp from "./component/SignUp";
import './component/Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
