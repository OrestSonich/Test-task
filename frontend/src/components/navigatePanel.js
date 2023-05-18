import {Link} from "react-router-dom";
import "../stylesheets/navigatePanel.scss"
import UserCircleLogo from "./UserCircleLogo";
const NavigatePanel = () => {
    let test = {
        name: "Test"
    }
    return(
        <div className="navigate">
            <UserCircleLogo props={test}/>
            <Link to="/link">Credit</Link>
            <Link to="/">Main</Link>
            <Link to="/cashbacks">CashBak</Link>
        </div>
    )
}
export default NavigatePanel;