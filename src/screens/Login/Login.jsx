import { useState } from "react";
import "./Login.css"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState('bansal.shivam1216@gmail.com')
    const [password, setPassword] = useState('123')

    
    const navigate = useNavigate();
    
    const submitHandler = (event) => {
        
        // localStorage.setItem('Email', email)
        // localStorage.setItem('Password', password)
        
        event.preventDefault();

        console.log(email);
        console.log(password);
        console.log(event);

        
        if(email === localStorage.getItem(email)) {

            navigate('/homepage');

        }

        else {
            alert("email in use!")
        }


    }

    return(
        <div id="login">
            {/* <p>Login</p> */}
            <form className="container" action="">
                <div className="input-container">
                    <div className="input-content">
                        <div className="input-dist">
                            <div className="input-type">
                            {/* <input class="input-is" type="text" required placeholder="Username" />
                            <input
                                class="input-is"
                                type="text"
                                required
                                placeholder="Name"
                            /> */}
                            <input
                                onChange={(e)=> setEmail(e.target.value)}
                                className="input-is"
                                type="text"
                                placeholder="Email"
                            />
                            <input
                                onChange={(e)=> setPassword(e.target.value)}
                                className="input-is"
                                type="password"
                                required
                                placeholder="Password"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            
            <Link>
                <button type="submit" onClick={submitHandler} className="submit-button">Sign In</button>
            </Link> 
            </form>

        </div>
    )
}

export default Login;