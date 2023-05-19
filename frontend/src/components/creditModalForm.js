import {useContext, useState} from "react";
import {StoreContext} from "../App";


const CreditModalForm = (props) => {
    const items = useContext(StoreContext)
    const [nameCredit, setNameCredit] = useState("")
    const [sumCredit, setSumCredit] = useState("")
    const [procCredit, setProcCredit] = useState("")
    const addNew = (e) => {
        e.preventDefault()
        if(nameCredit !== "" && sumCredit !== "" && procCredit !== "") {
            items.credits.unshift({
                name: nameCredit,
                value: 0,
                endValue: parseInt(sumCredit),
                proc: parseInt(procCredit)/100,
                date: new Date().toLocaleString("uk", {
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
            <div className="modal_form__credit" style={{zIndex:3}}>
                <h3>Добавити кредит:</h3>
                <div className="hr"></div>
                <form>
                    <div style={{display:"flex",justifyContent:"space-between"}} className="formFlex">
                        <label>Назва кредиту: </label>
                        <input type="text" value={nameCredit} onChange={(el) => setNameCredit(el.target.value)}/>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}} className="formFlex">
                        <label>Кінцева сумма:</label>
                        <input type="number" value={sumCredit} onChange={(el) => setSumCredit(el.target.value)}/>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}} className="formFlex">
                        <label>Відсоток: </label>
                        <input type="number" value={procCredit} onChange={(el) => setProcCredit(el.target.value)}/>
                    </div>
                </form>
                <button onClick={(e) => addNew(e)}>Створити</button>

            </div>
        )
    }else {
        return null
    }
}
export default CreditModalForm