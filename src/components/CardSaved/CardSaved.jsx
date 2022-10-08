import React from 'react'
import image from '../../assets/icon-complete.svg'
import classes from './CardSaved.module.css'

const CardSaved = (props) => {
    return (
        <div className={classes.container}>
            <img src={image} alt="" />
            <h1>THANK YOU!</h1>
            <p>We've added your card details</p>
            <button onClick={props.setIsEditing}>Continue</button>
        </div>
    )
}

export default CardSaved