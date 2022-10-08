import { useState } from 'react'
import classes from './InputForm.module.css'

const InputForm = (props) => {
    
    return (
        <div className={classes.container}>
            <form onSubmit={props.formSubmitHandler}>
                <div className={classes['input-wrapper']}>
                    <label htmlFor="cardname">CARDHOLDER NAME</label>
                    <input 
                        type="text" 
                        name='cardname' 
                        id='cardname' 
                        placeholder='e.g. Jane Appleseed' 
                        value={props.name} 
                        onChange={props.nameHandler} 
                        required
                    />
                </div>
                <div className={classes['input-wrapper']}>
                    <label htmlFor="cardnumber">CARD NUMBER</label>
                    <input 
                        type="text" 
                        name='cardnumber' 
                        id='cardnumber' 
                        maxLength='19' 
                        placeholder='e.g. 1234 5678 9123 0000' 
                        value={props.cardNumber} 
                        onChange={props.cardNumberHandler} 
                        required
                    />
                </div>
                    
                <div className={classes.dateCVCwrapper}>
                    <div className={classes['input-wrapper']}>
                        <label htmlFor="date">EXP. DATE (MM/YY)</label>
                        <div className={classes.inputDateWrapper}>
                            <input 
                                type="text" 
                                name='month' 
                                id='date' 
                                maxLength='2' 
                                placeholder='MM'
                                value={props.month}
                                onChange={props.monthHandler}
                                required
                            />
                            <input 
                                type="text" 
                                name='year' 
                                id='date' 
                                maxLength='2' 
                                placeholder='YY' 
                                value={props.year}
                                onChange={props.yearHandler}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className={classes['input-wrapper']}>
                        <label className={classes.cvc} htmlFor="cvc">CVC</label>
                        <input 
                            className={classes.cvc} 
                            type="text" 
                            id='cvc' 
                            maxLength='3' 
                            placeholder='e.g. 123' 
                            value={props.cvc} 
                            onChange={props.cvcHandler} 
                            required
                        />
                    </div>
                </div>
                <button className={classes.button} type="submit">CONFIRM</button>
            </form>
        </div>
    )
}

export default InputForm