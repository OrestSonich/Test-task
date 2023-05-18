import {Link} from "react-router-dom"
import ErrorPageLogo from "../img/logo.svg"

import Wave from "react-wavify"

import "../stylesheets/404.scss"
const ErrorPage = () => {
    return(
        <div className="error">
            <h2 className="error__title">Помилка 404</h2>
            <p className="error__descr">Такої сторінки не знайдено</p>
            <Link to="/">
                <button className="error__button">На головну сторінку</button>
            </Link>
            <img src={ErrorPageLogo} alt="Error Logo" className="error__logo"/>
            <Wave
                fill="#002244"
                paused={false}
                options={{
                    height: 10,
                    amplitude: 25,
                    speed: 0.20,
                    points:3
                }}
                className="error__wave"
            />
        </div>
    )
}
export default ErrorPage;