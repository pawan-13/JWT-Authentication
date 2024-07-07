import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="loginOuter">
                        <form action="./action.php" method="post" className="outerWrapper">
                            <div className="formWrapper">
                                <label htmlFor="email" className="labelControl">Email</label>
                                <input type="email" className="formControl" name="email" id="email" />
                            </div>
                            <div className="formWrapper">
                                <label htmlFor="password" className="labelControl">Password</label>
                                <input type="password" className="formControl" name="password" id="password" />
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