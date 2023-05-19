import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import {Line} from "react-chartjs-2"
import "../stylesheets/income.scss"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
const Income = ({props}) => {

    const option = {
    }
    return(
        <section className="income" style={{background:"#fff",zIndex:1}}>
            <div>
                <Line data={props} options={option} min={0}/>
                <div className="income__button_wrapper">
                    <button>Добавити</button>
                    <button>Видалити</button>
                    <button>Змінити</button>
                </div>
            </div>
        </section>
    )
}
export default Income;