

const ListItemsCircle = ({props,allSum}) => {
    if(props.value) {
        return(
            <div className="main__circle_section__statistic__item">
                <div className="main__circle_section__statistic__item__text_wrapper">
                    <div style={{borderRadius:"100%", background: `${props.color}`, width:32,height:32}}></div>
                    <h4>{props.type}</h4>
                </div>
                <p>{((props.value/allSum)*100).toFixed(2)} %</p>
            </div>
        )
    } else {
        return null;
    }
}
export default ListItemsCircle