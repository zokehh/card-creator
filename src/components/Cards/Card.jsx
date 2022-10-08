import React from 'react'
import CardBottom from './CardBottom'
import CardTop from './CardTop'
import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={classes.container}>
            <CardTop 
                className={classes.cardTop} 
                name={props.name}
                cardNumber={props.cardNumber}
                month={props.month}
                year={props.year}
            />
            <CardBottom 
                className={classes.cardBottom} 
                cvc={props.cvc}
            />
        </div>
    )
}

export default Card