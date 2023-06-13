import React from 'react';
import styles from "./ScheduleTable.module.css";
import cs from "classnames";
const ScheduleTable = ({events, className }) => {
    return (
        <div className={cs(styles.ScheduleTable__Container, className)}>
            <h2 className={styles.ScheduleTable__Heading}>
                Schedule
            </h2>
            <div>
                {events.map((event) => (
                    <div className={styles.ScheduleTableRow}>
                        <div> {event.date}</div>
                        <div>{event.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScheduleTable;