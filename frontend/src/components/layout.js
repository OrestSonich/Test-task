import {Outlet} from "react-router-dom";
import NavigatePanel from "./navigatePanel";

import Wave from "react-wavify"
const Layout = () => {
    return(
        <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
            <NavigatePanel/>
            <Outlet/>
            {/*<Wave*/}
            {/*    fill="#00A651"*/}
            {/*    paused={false}*/}
            {/*    options={{*/}
            {/*        height: 10,*/}
            {/*        amplitude: 35,*/}
            {/*        speed: 0.10,*/}
            {/*        points:10*/}
            {/*    }}*/}
            {/*    className="wave"*/}
            {/*/>*/}
        </div>
    )
}
export default Layout;