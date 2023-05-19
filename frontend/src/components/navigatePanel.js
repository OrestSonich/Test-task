import {Link} from "react-router-dom";
import "../stylesheets/navigatePanel.scss"

import {BiExit} from "react-icons/bi"
import UserCircleLogo from "./UserCircleLogo";
const NavigatePanel = () => {
    let test = {
        name: "Test"
    }
    return(
        <div className="navigate">
            <UserCircleLogo props={test}/>
            <Link to="/login">
                <button><BiExit/></button>
            </Link>
            {/*<Link to="/credits">Credit</Link>*/}
            {/*<Link to="/">Main</Link>*/}
            {/*<Link to="/cashbacks">CashBak</Link>*/}
        </div>
    )
}
export default NavigatePanel;