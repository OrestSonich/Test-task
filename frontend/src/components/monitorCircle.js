import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import {Doughnut} from "react-chartjs-2"

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
const MonitorCircle = ({props}) => {
    const options = {
        radius: 160,
        responsive: true,
        maintainAspectRatio: true,
        offset: 0,
        borderWidth:5,
        borderJoinStyle:"miter",
        borderColor:"#F5F5F5",
        borderAlign: "center",
        hoverOffset: 8
    };
    if(window.innerWidth < 550) {
        options.radius = 155
    }
    return (
        <div className="doughnut" >
            <Doughnut
                data={props}
                options={options}
            >
            </Doughnut>
        </div>
    )
}
export default MonitorCircle;