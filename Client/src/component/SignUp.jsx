import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const SignUp = () => {
    const [inputval, setInputVal] = useState({
        name: "",
        email: "",
        password: "",
        error: {
            name: "",
            email: "",
            password: "",
        },
    });

    const handleSubmit = (e) => {
        const { name, value } = e.target;
        setInputVal((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleClick = async(e) => {
        e.preventDefault();
        const { name, email, password } = inputval;
        let errors = {
            name: "",
            email: "",
            password: "",
        };
        
        let hasErrors = true;

        if (name === "") {
            errors.name = "Name should not be blank";
            hasErrors = false;
        } else if (name.length < 10) {
            errors.name = "Name should be at least 10 characters";
            hasErrors = false;
        }

        if (email === "") {
            errors.email = "Email should not be empty";
            hasErrors = false;
        } else if (!email.includes("@")) {
            errors.email = "Email must contain @";
            hasErrors = false;
        }

        if (password === "") {
            errors.password = "Password should not be empty";
            hasErrors = false;
        } else if (password.length <= 10) {
            errors.password = "Password length should be more than 10";
            hasErrors = false;
        }

        if (hasErrors) {
            const data  = await axios.post('/signup',{
                data:JSON.stringify({
                    name, email, password
                })
            });   
            console.log('response',data);
            setInputVal({
                name: "",
                email: "",
                password: "",
                error: {
                    name: "",
                    email: "",
                    password: "",
                },
            });   
        } else {
            setInputVal((prevState) => ({
                ...prevState,
                error: errors,
            }));
        }
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="loginOuter">
                        <form onSubmit={handleClick} className="outerWrapper">
                            <div className="formWrapper">
                                <label htmlFor="name" className="labelControl">Name</label>
                                <input
                                    type="text"
                                    className="formControl"
                                    value={inputval.name}
                                    onChange={handleSubmit}
                                    name="name"
                                    id="name"
                                />
                                <span style={{ fontSize: "1rem", color: "red" }}>{inputval.error.name}</span>
                            </div>
                            <div className="formWrapper">
                                <label htmlFor="email" className="labelControl">Email</label>
                                <input
                                    type="email"
                                    className="formControl"
                                    value={inputval.email}
                                    onChange={handleSubmit}
                                    name="email"
                                    id="email"
                                />
                                <span style={{ fontSize: "1rem", color: "red" }}>{inputval.error.email}</span>
                            </div>
                            <div className="formWrapper">
                                <label htmlFor="password" className="labelControl">Password</label>
                                <input
                                    type="password"
                                    className="formControl"
                                    value={inputval.password}
                                    onChange={handleSubmit}
                                    name="password"
                                    id="password"
                                />
                                <span style={{ fontSize: "1rem", color: "red" }}>{inputval.error.password}</span>
                            </div>
                            <div>
                                <button className="btn btn-success mb-2">SignUp</button>
                            </div>
                            <div>
                                <p className="switchaccount mb-0 text-center">
                                    Already have an Account? <Link to="/">LogIn</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
