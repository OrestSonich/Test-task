import {useContext} from "react";
import {StoreContext} from "../App";

import "../stylesheets/cashback.scss"
import CashbackItem from "../components/cashbackItem";
const Cashback = () => {
    const props = useContext(StoreContext)
    let cashBackSum = props.cashbacks.map(el => el.value).reduce((partialSum, a) => partialSum + a, 0)
    return(
        <section className="cashback section">
            <div className="container">
                <h2>Кешбек:</h2>
                <div className="cashback__wrapper">
                    <h1>{cashBackSum}₴</h1>
                    <div className="hr"></div>
                    {props.cashbacks.map((el,id) => <CashbackItem el={el} key={id++}/>)}
                </div>
            </div>
        </section>
    )
}
export default Cashback;