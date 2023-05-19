import {Link} from "react-router-dom";
import Logo from "../img/logoS.svg"
import {useState} from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";
import "../stylesheets/auth.scss"
import setAuthToken from "../App";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleSubmit(email,pass) {
        const loginPayload = {
            email: email,
            password: pass
        }
        axios.post("",loginPayload).then(response => {
            const token = response.data.token;

            localStorage.setItem("token", token);
            setAuthToken(token)

            window.location.href = '/'
        }).catch(err => console.log(err))
    }

    return(
        <div className="loginS">
            <div className="container">
                <div className="login">
                    <img src={Logo} alt="Logo"/>

                    <span>З поверненням!</span>

                    <div className="input--field">
                        <input type="text" placeholder="Електронна адреса" name="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="input--field">
                        <input type="password" placeholder="Пароль" name="Email" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="choose">
                        <Link to="/register">Зареєструватися</Link>
                    </div>
                    <button onClick={() => handleSubmit(email,password)}>Увійти</button>
                </div>
            </div>
        </div>
    )
}
export default Login;