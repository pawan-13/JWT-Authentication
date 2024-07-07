import { Link } from "react-router-dom";
const SignUp = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="loginOuter">
                        <form action="./action.php" method="post" className="outerWrapper">
                            <div className="formWrapper">
                                <label htmlFor="name" className="labelControl">Name</label>
                                <input type="text" className="formControl" name="name" id="name" />
                            </div>
                            <div className="formWrapper">
                                <label htmlFor="email" className="labelControl">Email</label>
                                <input type="email" className="formControl" name="email" id="email" />
                            </div>
                            <div className="formWrapper">
                                <label htmlFor="password" className="labelControl">Password</label>
                                <input type="password" className="formControl" name="password" id="password" />
                            </div>
                            <div>
                                <button className="btn btn-success mb-2">SignUp</button>
                            </div>
                            <div>
                                <p className="switchaccount mb-0 text-center">Already have Account? <Link to="/">LogIn</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SignUp;