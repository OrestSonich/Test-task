

const NotificationItem = ({props}) => {
    return (
        <div className="main__wrapper__notification_section__item">
            <p className="main__wrapper__notification_section__item_descr">{props.descr}</p>
            <h3>{props.value}₴</h3>
            <p className="main__wrapper__notification_section__item_date">До {props.date}</p>
        </div>
    )
}
export default NotificationItem