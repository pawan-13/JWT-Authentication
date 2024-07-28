import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const [inputval, setInputVal] = useState({
        email: "",
        password: "",
        error: {
            email: "",
            password: ""
        },
    });

    console.log(inputval);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputVal((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = inputval;
        let errors = {
            email: "",
            password: "",
        }

        if (email === "") {
            errors.email = "Email is required";
        }
        else if (!email.includes('@')) {
            errors.email = "Invalid email";
        }

        if (password === "") {
            errors.password = "Password is required";
        }
        else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }

        setInputVal((preValue) => {
            return {
                ...preValue,
                error: errors,
            }
        });
        return true;
    }
return (
    <>
        <section>
            <div className="container">
                <div className="loginOuter">
                    <form action="./action.php" method="post" onSubmit={handleSubmit} className="outerWrapper">
                        <div className="formWrapper">
                            <label htmlFor="email" className="labelControl">Email</label>
                            <input type="email" className="formControl" value={inputval.email} onChange={handleChange} name="email" id="email" />
                            <span style={{ fontSize: "1rem", color: "red" }}>{inputval.error.email}</span>
                        </div>
                        <div className="formWrapper">
                            <label htmlFor="password" className="labelControl">Password</label>
                            <input type="password" className="formControl" value={inputval.password} onChange={handleChange} name="password" id="password" />
                            <span style={{ fontSize: "1rem", color: "red" }}>{inputval.error.password}</span>
                        </div>
                        <div>
                            <button className="btn btn-primary mb-2">Login</button>
                        </div>
                        <div>
                            <p className="switchaccount mb-0 text-center">If you dont have account Please <Link to="/signup">SignUp</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
)
}
export default Login;