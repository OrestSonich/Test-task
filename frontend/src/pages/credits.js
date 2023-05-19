import {useContext, useState} from "react";
import {StoreContext} from "../App";
import { ChakraProvider } from '@chakra-ui/react'


import {HiPlusCircle} from "react-icons/hi"
import "../stylesheets/credits.scss"
import CreditItem from "../components/creditItem";
import CreditModalForm from "../components/creditModalForm";
const Credits = () => {
    const props = useContext(StoreContext);
    const [creditModal,setCreditModal] = useState(false)
    const addNewCredit = (props) => {

    }
    return(
        <section className="credits section" style={{background:"#fff",zIndex:2}}>
                <div className="credits_text__wrapper">
                    <h2>Кредити:</h2>
                    <button onClick={() => setCreditModal(true)}><HiPlusCircle/></button>
                </div>
                <div className="wrp">
                    {props.credits.map((el, id) => <CreditItem props={el} key={id++}/>)}
                </div>
                <div className="credits_text__wrapper">
                    <h2>Депозити:</h2>
                    <button><HiPlusCircle/></button>
                </div>
                <div>
                </div>
            <CreditModalForm onClose={() => setCreditModal(false)} show={creditModal}/>
        </section>
    )
}
export default Credits;