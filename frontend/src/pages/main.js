import "../stylesheets/main.scss"
import {useState, useContext,useCallback} from "react";
import {BsBellFill} from "react-icons/bs"
import {loadFull} from "tsparticles"
import Particles from "react-particles";

import NotificationItem from "../components/notificationItem";
import AddModalForm from "../components/addModalForm";
import NotificationModalForm from "../components/notificationModalForm";
import Credits from "./credits";
import Income from "./income";
import MonitorCircle from "../components/monitorCircle";
import ListItemsCircle from "../components/listItemsCircle";

import {StoreContext} from "../App";



const MainPage = () => {

    const options = {
        preset: "triangles",
    }
    const customInit = useCallback(async engine => {
        await loadFull(engine)
    })
    const props = useContext(StoreContext)

    let allSum = props.categories.map(el => el.value).reduce((partialSum, a) => partialSum + a, 0)
    let allItems = props.categories.map(el => el.value > 0?el.value:null).filter(el => el != null);
    const data = {
        labels: [],
        datasets: [
            {
                data: props.categories.sort((a,b) => b.value - a.value),
                backgroundColor: props.categories.sort((a,b) => b.value - a.value).map(el => el.color)
            }
        ],
    }
    const dataInc = {
        labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень',"Серпень","Вересень","Жовтень","Листопад","Грудень"],
        datasets: [
            {
                label:"Дохід",
                data: props.income.map(el => el.value),
                fill:true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    }

    const [buttonState, setButtonState] = useState(false)
    const [visible, setVisible] = useState(215)
    const [addModalState, setAddModalState] = useState(false)
    const [notificationState,setNotificationState] = useState(false)

    const Button = ({value, buttonState}) => {
        if(buttonState) {
            return (
                <button onClick={() => {
                    setVisible(value);
                    setButtonState(!buttonState)
                }}>Скрити все</button>
            )
        }else {
            return (
                <button onClick={() => {
                    setVisible(value);
                    setButtonState(!buttonState)
                }}>Показати все</button>
            )
        }
    }

    const TextPrice = () => {
        if(window.innerWidth < 550) {
            return(
                !buttonState? <h1 className="main__circle_section__priceText" style={{top:"16.3%", left:"36%"}}>{allSum}₴</h1>:<h1 className="main__circle_section__priceText" style={{top:"11.8%",left:"36%"}}>{allSum}₴</h1>
            )
        }else if(window.innerWidth > 550){
            return (
                !buttonState? <h1 className="main__circle_section__priceText" style={{top:"37.3%", left:"18.4%"}}>{allSum}₴</h1>:<h1 className="main__circle_section__priceText" style={{top:"42.8%",left:"18.3%"}}>{allSum}₴</h1>
            )
        }
    }

    return(
        <section className="main section" style={{zIndex: 2}}>
            <div className="container" style={{zIndex:2}}>
                <div className="main__circle_section">
                    <MonitorCircle props={data}/>
                    <TextPrice/>
                    {/*{window.innerWidth > 550? !buttonState? <h1 className="main__circle_section__priceText" style={{top:"37.9%"}}>{allSum}₴</h1>:<h1 className="main__circle_section__priceText" style={{top:"40.5%"}}>{allSum}₴</h1>: !buttonState? <h1 className="main__circle_section__priceText" style={{top:"15.9%"}}>{allSum}₴</h1>: <h1 className="main__circle_section__priceText" style={{top:"17.5%"}}>{allSum}₴</h1>}*/}
                    <div className="main__circle_section__statistic">
                        <h3>Історія витрат за місяць: </h3>
                        <div className="main__circle_section__statistic__item_wrapper" style={{maxHeight: visible}}>
                            {props.categories.map((el) => <ListItemsCircle props={el} allSum={allSum} key={el.category}/>)}
                        </div>
                        {allItems.length > 3? !buttonState? <Button value={735} buttonState={buttonState}/>:<Button value={210} buttonState={buttonState}/>:null}
                    </div>
                </div>
                <div className="main__wrapper">
                    <div className="main__wrapper__add_section">
                        <h4>Додати витрату або нагадування:</h4>
                        <div className="main__wrapper__add_section__button_wrapper">
                            <div className="main__wrapper__add_section__waste_button">
                                <button onClick={() => !notificationState?setAddModalState(true):null}>+</button>
                            </div>
                            <div className="main__wrapper__add_section__waste_button" onClick={() => !addModalState?setNotificationState(true):null}>
                                <button className="bell"><BsBellFill/></button>
                            </div>
                        </div>
                    </div>
                    <div className="main__wrapper__notification_section">
                        <h4>Нагадування: </h4>
                        {props.notifications.map((el,id) =><NotificationItem props={el} key={id++}/>)}
                    </div>
                </div>
                <AddModalForm onClose={() => setAddModalState(false)} show={addModalState} placeHolder={"Виберіть категорію"}/>
                <NotificationModalForm onClose={() => setNotificationState(false)} show={notificationState}/>
                <Credits style={{background:"#fff"}}/>
                <Income props={dataInc} />
            </div>
            {/*<Particles init={customInit}*/}
            {/*           style={{zIndex:-1}}*/}
            {/*           options={{*/}
            {/*               fpsLimit: 120,*/}
            {/*               interactivity: {*/}
            {/*                   events: {*/}
            {/*                       onClick: {*/}
            {/*                           enable: true,*/}
            {/*                           mode: "push",*/}
            {/*                       },*/}
            {/*                       onHover: {*/}
            {/*                           enable: true,*/}
            {/*                           mode: "repulse",*/}
            {/*                       },*/}
            {/*                       resize: true,*/}
            {/*                   },*/}
            {/*                   modes: {*/}
            {/*                       push: {*/}
            {/*                           quantity: 4,*/}
            {/*                       },*/}
            {/*                       repulse: {*/}
            {/*                           distance: 100,*/}
            {/*                           duration: 0.4,*/}
            {/*                       },*/}
            {/*                   },*/}
            {/*               },*/}
            {/*               particles: {*/}
            {/*                   color: {*/}
            {/*                       value: "#666699",*/}
            {/*                   },*/}
            {/*                   links: {*/}
            {/*                       color: "#666699",*/}
            {/*                       distance: 100,*/}
            {/*                       enable: true,*/}
            {/*                       opacity: 1,*/}
            {/*                       width: 1*/}
            {/*                   },*/}
            {/*                   collisions: {*/}
            {/*                       enable: false,*/}
            {/*                   },*/}
            {/*                   move: {*/}
            {/*                       directions: "none",*/}
            {/*                       enable: true,*/}
            {/*                       outModes: {*/}
            {/*                           default: "bounce",*/}
            {/*                       },*/}
            {/*                       random: false,*/}
            {/*                       speed: 1,*/}
            {/*                       straight: false,*/}
            {/*                   },*/}
            {/*                   number: {*/}
            {/*                       density: {*/}
            {/*                           enable: true,*/}
            {/*                           area: 800,*/}
            {/*                       },*/}
            {/*                       value: 120,*/}
            {/*                   },*/}
            {/*                   opacity: {*/}
            {/*                       value: 0.5,*/}
            {/*                   },*/}
            {/*                   shape: {*/}
            {/*                       type: "circle",*/}
            {/*                   },*/}
            {/*                   size: {*/}
            {/*                       value: { min: 3, max: 10 },*/}
            {/*                   },*/}
            {/*               },*/}
            {/*               detectRetina: true,*/}
            {/*           }}*/}
            {/*/>*/}
        </section>
    )
}
export default MainPage;