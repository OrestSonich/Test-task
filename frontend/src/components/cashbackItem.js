import {MdAssignmentReturned} from "react-icons/md"
import {useContext} from "react";
import {StoreContext} from "../App";

const CashbackItem = ({el}) => {
    const props = useContext(StoreContext)
    return (
        <div className="cashback__wrapper__item">
            <MdAssignmentReturned style={{color:"#00A651", fontSize:62, marginLeft:95}}/>
            <div className="cashback__wrapper__item_wrapper">
                <div className="wrap">
                    <div style={{background: `${props.categories.filter((props) => props.type === el.type).map(el => el.color)[0]}`, width:42,height:42, borderRadius:"100%"}}></div>
                    <p>{el.type}</p>
                </div>
                <p className="value">{el.value}₴</p>
                <p className="date">{el.date}</p>
            </div>
        </div>
    )
}
export default CashbackItem;