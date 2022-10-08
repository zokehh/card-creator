import React from 'react'
import classes from './CardBottom.module.css'


const CardBottom = (props) => {
    return (
        <div className={classes.cardBottom}>
            <p>{props.cvc > "" ? props.cvc : "000"}</p>
        </div>
    )
}

export default CardBottom