import React from 'react'
import classes from './CardTop.module.css'

const CardTop = (props) => {
    return (
        <div className={classes.cardTop}>
            <div className={classes.circleContainer}>
                <div className={classes.circle}></div>
                <div className={classes.openedCircle}></div>
            </div>
            <div className={classes.container}>
                <h3>{props.cardNumber > "" ? props.cardNumber : "0000 0000 0000 0000"}</h3>
                <div className={classes.nameAndDate}>
                    <p className={classes.name}>{props.name > "" ? props.name : "JANNE APPLESEED"}</p>
                    <p>{props.month > "" ? props.month : "00"} / {props.year > "" ? props.year : "00"}</p>
                </div>
            </div>
        </div>
    )
}

export default CardTop