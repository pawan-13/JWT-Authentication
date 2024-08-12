import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [inputval, setInputVal] = useState({
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    data?.token && navigate("/dash");
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    const notify = () =>
      toast.success("Login is successfull", {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
      });
    const errorNotify = () =>
      toast.error("something is wrong", {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
      });
    e.preventDefault();
    const { email, password } = inputval;
    let errors = {
      email: "",
      password: "",
    };

    let hasErrors = true;

    if (email === "") {
      errors.email = "Email is required";
      hasErrors = false;
    } else if (!email.includes("@")) {
      errors.email = "Invalid email";
      hasErrors = false;
    }

    if (password === "") {
      errors.password = "Password is required";
      hasErrors = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      hasErrors = false;
    }

    if (hasErrors) {
      try {
        const response = await axios.post(
          "http://localhost:8000/login",
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        setData(response.data);
        notify();
        console.log(response.data.token, "token");
        localStorage.setItem("usersdatatoken", response.data.token);
        console.log("usersdatatoken", localStorage.getItem("usersdatatoken"));
        setInputVal({
          email: "",
          password: "",
          error: {
            email: "",
            password: "",
          },
        });
      } catch (error) {
        errorNotify();
        console.error(
          "Error during Login:",
          error.response ? error.response.data : error.message
        );
      }
    } else {
      setInputVal((preValue) => {
        return {
          ...preValue,
          error: errors,
        };
      });
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="loginOuter">
            <form
              action="./action.php"
              method="post"
              onSubmit={handleSubmit}
              className="outerWrapper"
            >
              <div className="formWrapper">
                <label htmlFor="email" className="labelControl">
                  Email
                </label>
                <input
                  type="email"
                  className="formControl"
                  value={inputval.email}
                  onChange={handleChange}
                  name="email"
                  id="email"
                />
                <span style={{ fontSize: "1rem", color: "red" }}>
                  {inputval.error.email}
                </span>
              </div>
              <div className="formWrapper">
                <label htmlFor="password" className="labelControl">
                  Password
                </label>
                <input
                  type="password"
                  className="formControl"
                  value={inputval.password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                />
                <span style={{ fontSize: "1rem", color: "red" }}>
                  {inputval.error.password}
                </span>
              </div>
              <div>
                <button className="btn btn-primary mb-2">Login</button>
              </div>
              <div>
                <p className="switchaccount mb-0 text-center">
                  If you dont have account Please{" "}
                  <Link to="/signup">SignUp</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};
export default Login;
