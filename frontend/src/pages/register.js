import "../stylesheets/auth.scss"
import {Link} from "react-router-dom"

import Logo from "../img/logoS.svg"
import {useState} from "react";

import axios from "axios";
import setAuthToken from "../App";
const Register = () => {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")
    function handleSubmit(firsName,lastName,email,pass1,pass2) {
        if(pass1 === pass2 && firsName && lastName && email && pass1 && pass2) {
            const loginPayload = {
                firstName: firsName,
                lastName: lastName,
                email: email,
                password: pass1
            }
            axios.post("",loginPayload).then(response => {
                const token = response.data.token;

                localStorage.setItem("token", token);
                setAuthToken(token)

                window.location.href = '/'
            }).catch(err => console.log(err))
        }else {
            console.log("ERR")
        }
    }

    return(
        <div className="loginS">
            <div className="container">
                <div className="login">
                    <img src={Logo} alt="Logo"/>

                    <span>Вітаємо на нашому сайті!</span>

                    <div className="input--field">
                        <input type="text" placeholder="Ім`я:" name="Email" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </div>

                    <div className="input--field">
                        <input type="text" placeholder="Призвище" name="Email" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </div>

                    <div className="input--field">
                        <input type="text" placeholder="Електронна адреса" name="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="input--field">
                        <input type="password" placeholder="Пароль" name="Email" value={pass1} onChange={e => setPass1(e.target.value)}/>
                    </div>

                    <div className="input--field">
                        <input type="password" placeholder="Підтвердити пароль" name="Email" value={pass2} onChange={e => setPass2(e.target.value)}/>
                    </div>

                    <div className="choose">
                        <Link to="/login">Увійти</Link>
                    </div>

                    <button onClick={() => handleSubmit(firstName,lastName,email,pass1,pass2)}>Зареєструватися</button>
                </div>
            </div>
        </div>
    )
}
export default Register