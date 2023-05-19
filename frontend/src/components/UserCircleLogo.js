import {Link} from "react-router-dom";
import {Avatar} from "@chakra-ui/react";
const UserCircleLogo = ({props}) => {
    let nameLogo = props.name[0];
    return(
        <div className="userLogoWrapper">
            <Link to="/profile">
                <Avatar bg='teal.500' />
            </Link>
            <div className="userLogoWrapper__info">
                <h4>{props.name}</h4>
            </div>
        </div>
    )
}
export default UserCircleLogo;