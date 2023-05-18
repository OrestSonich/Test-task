import {Link} from "react-router-dom";

const UserCircleLogo = ({props}) => {
    let nameLogo = props.name[0];
    return(
        <div className="userLogoWrapper">
            <Link to="/profile">
                <div className="userLogoWrapper__logo">
                    <h4>{nameLogo}</h4>
                </div>
            </Link>
            <div className="userLogoWrapper__info">
                <h4>{props.name}</h4>
                <Link to="/login">
                    <button>Log out</button>
                </Link>
            </div>
        </div>
    )
}
export default UserCircleLogo;