import "./Login.css"
import { Link } from "react-router-dom"


function Login() {

    return(
        <div id="login">
            {/* <p>Login</p> */}
            <form class="container" action="">
                <div class="input-container">
                    <div class="input-content">
                        <div class="input-dist">
                            <div class="input-type">
                            <input class="input-is" type="text" required placeholder="Username" />
                            <input
                                class="input-is"
                                type="text"
                                required
                                placeholder="Name"
                            />
                            <input
                                class="input-is"
                                type="text"
                                placeholder="Email"
                            />
                            <input
                                class="input-is"
                                type="password"
                                required
                                placeholder="Password"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            
            <Link to='/homepage' style={{textDecoration: 'none'}}>
                <button type="submit" class="submit-button">Sign In</button>
            </Link>
            </form>

        </div>
    )
}

export default Login;