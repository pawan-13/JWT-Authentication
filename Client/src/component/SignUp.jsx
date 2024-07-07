import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
    const[inputval,setInputVal] = useState({
        name:"",
        email:"",
        password:"",
    });
    console.log(inputval);

    const handleSubmit= (e) =>{
      const{name,value} = e.target;
        setInputVal(()=>{
            return{
                ...inputval,
                [name]:value
            }
        })
    };

    const handleClick = (e) => {
        e.preventDefault();
        const{name,email,password} = inputval;
        if(name===""){
            alert('name not blank');
        }
        else if(name<10){
            alert('name is not not less than 10');
        }
        else if(email===""){
            alert('email is not valid');
        }
        else if(!email.includes('@')){
            alert('@ is include')
        }
        else if(password===""){
            alert('password in not empty');
        }
        else{
            alert('user is successfull');
            console.log('user is successfull');
        }
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="loginOuter">
                        <form action="./action.php" method="post" onSubmit={handleClick} className="outerWrapper">
                            <div className="formWrapper">
                                <label htmlFor="name" className="labelControl">Name</label>
                                <input type="text" className="formControl" value={inputval.name} onChange={handleSubmit} name="name" id="name" />
                            </div>
                            <div className="formWrapper">
                                <label htmlFor="email" className="labelControl">Email</label>
                                <input type="email" className="formControl" value={inputval.email}  onChange={handleSubmit} name="email" id="email" />
                            </div>
                            <div className="formWrapper">
                                <label htmlFor="password" className="labelControl">Password</label>
                                <input type="password" className="formControl" value={inputval.password}  onChange={handleSubmit} name="password" id="password" />
                            </div>
                            <div>
                                <button className="btn btn-success mb-2">SignUp</button>
                            </div>
                            <div>
                                <p className="switchaccount mb-0 text-center">Already have an Account? <Link to="/">LogIn</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SignUp;