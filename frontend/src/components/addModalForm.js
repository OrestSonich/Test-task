import {useContext, useEffect, useState} from "react";
import {GoChevronDown} from "react-icons/go"
import {StoreContext} from "../App";
const AddModalForm = (props,{placeHolder}) => {
    const option = useContext(StoreContext);
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const getDisplayed = () => {
        if(selectedValue) {
            return selectedValue.type;
        }
        return placeHolder;
    }

    const onItemClick = (option) => {
        setSelectedValue(option);
    }

    const isSelected = (option) => {
        if(!selectedValue) {
            return false
        }
        return selectedValue.type
    }

    const addHandler = (typeCat,value) => {
        if(typeCat != null) {
            if(value !== "") {
                value = parseInt(value);
                option.categories.filter(el => el.type === typeCat.type)[0].value += value
                option.cashbacks.push({
                    value:parseInt((value*0.15).toFixed(2)),
                    type:typeCat.type,
                    date: new Date().toLocaleString("uk",{
                        day: "numeric",
                        month:"long",
                        year:"numeric"
                    })
                })
            }
        }
        props.onClose()
    }

    useEffect(() => {
        const handler = () => {
            setShowMenu(false)
        };
        window.addEventListener("click",handler)
        return() => {
            window.removeEventListener("click",handler)
        }
    })
    const handleInputClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    }
    if(props.show) {
        return(
            <div className="modal_form__add">
                <h3>Добавити витрати: </h3>
                <div className="hr"></div>
                <form style={{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"100%"}}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop: 25}}>
                        <label>Сума витрати: </label>
                        <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                    </div>
                    <div className="modal_form__add__category" >
                        <label>Категорія витрат: </label>
                        <div onClick={handleInputClick}><p className="eventer">{getDisplayed()} <GoChevronDown/></p></div>
                            {showMenu && (
                                <div className="modal_form__add__category__menu">
                                    {option.categories.map(el =>
                                        <div key={el.category} onClick={() => onItemClick(el)} className={`modal_form__add__category__menu__item ${isSelected(el) && "selected"}`}>
                                            <div style={{width:15, height:15, borderRadius: "100%", background: `${el.color}`}}></div>
                                            <p>{el.type}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                    </div>
                </form>
                <button onClick={() => addHandler(selectedValue,inputValue)}>Додати витрату</button>
            </div>
        )
    }else {
        return null;
    }
}
export default AddModalForm;