import {Progress} from "@chakra-ui/react";
const CreditItem = ({props}) => {
    let date = new Date(Date(props.date))
    const addDate = (date) => {
        date.setMonth(date.getMonth()+1)
        return new Date(date).toLocaleString("uk" ,{
            day:"numeric",
            month:"long",
        });
    }

    return(
        <div className="credits__wrapper_item">
            <h2>{props.name}:</h2>
            <div className="credits__wrapper_item_value">
                <div>
                    <p>{props.value}₴</p>
                    <p>/</p>
                    <p>{props.endValue}₴</p>
                </div>
                <p>{((props.value/props.endValue)*100).toFixed(0)}%</p>
            </div>
            <Progress value={(props.value/props.endValue)*100} size={"lg"} style={{borderRadius:"10px",marginTop:15}}/>
            <div className="credits__wrapper_item_data">
                <div className="credits__wrapper_item_data_smt">
                    <div>
                        <p>до повернення ще:</p>
                        <h5>{props.endValue - props.value} ₴</h5>
                    </div>
                    <div>
                        <p>наступний внесок до:</p>
                        <h5>
                            {addDate(date)}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreditItem;