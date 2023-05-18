import {useContext, useEffect, useState} from "react";
import {GoChevronDown} from "react-icons/go"
import {StoreContext} from "../App";
const NotificationModalForm = (props,{placeHolder}) => {
    const option = useContext(StoreContext);
    const [inputValueDescr, setInputValueDescr] = useState('');
    const [inputValueMoney, setInputValueMoney] = useState('');
    const [inputValueDate, setInputValueDate] = useState('');

    const addHandler = (inputValueDescr,inputValueMoney,inputValueDate) => {
        if(inputValueDate !== "" && inputValueDescr !== "" && inputValueMoney !== "") {
            option.notifications.push({
                descr: inputValueDescr,
                value: inputValueMoney,
                date: new Date(inputValueDate).toLocaleString("uk", {
                    day:"numeric",
                    month:"long",
                    year:"numeric"
                })
            })
        }
        props.onClose()
    }
    if(props.show) {
        return(
            <div className="modal_form__notification">
                <h3>Добавити нагадування: </h3>
                <div className="hr"></div>
                <form style={{display:"flex",flexDirection:"column"}}>
                    <div className="modal_form__notification__item">
                        <label>Опис:</label>
                        <input type="text" value={inputValueDescr} onChange={(e) => setInputValueDescr(e.target.value)}/>
                    </div>
                    <div className="modal_form__notification__item">
                        <label>Скільки грошей треба:</label>
                        <input type="number" value={inputValueMoney} onChange={(e) => setInputValueMoney(e.target.value)}/>
                    </div>
                    <div className="modal_form__notification__item">
                        <label>До якого числа:</label>
                        <input type="date" value={inputValueDate} onChange={(e) =>  setInputValueDate((e.target.value))}/>
                    </div>
                </form>
                <button onClick={() => addHandler(inputValueDescr,inputValueMoney,inputValueDate)}>Додати нагадування</button>
            </div>
        )
    }else {
        return null;
    }
}
export default NotificationModalForm;