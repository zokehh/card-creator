import Card from "./Cards/Card";
import InputForm from "./Input/InputForm";
import classes from './Container.module.css'
import { useState } from "react";
import CardSaved from "./CardSaved/CardSaved";

const Container = () => {
    const [name, setName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [cvc, setCVC] = useState("")
    const [isEditing, setIsEditing] = useState(true)

    function nameHandler(event) {
        setName(event.target.value)
    }

    function cardNumberHandler(event) {
        setCardNumber(event.target.value)
    }

    function monthHandler(event) {
        setMonth(event.target.value)
    }
    
    function yearHandler(event) {
        setYear(event.target.value)
    }

    function cvcHandler(event) {
        setCVC(event.target.value)
    }


    function formSubmitHandler(event) {
        event.preventDefault()

        setName("")
        setCardNumber("")
        setMonth("")
        setYear("")
        setCVC("")

        setIsEditing(false)
    }

    
    return (
        <div className={classes.container} >
            <Card 
                name={name}
                cardNumber={cardNumber}
                month={month}
                year={year}
                cvc={cvc}
            />
            {isEditing && <InputForm
                name={name} 
                nameHandler={nameHandler} 

                cardNumber={cardNumber}
                cardNumberHandler={cardNumberHandler}

                month={month}
                monthHandler={monthHandler}

                year={year}
                yearHandler={yearHandler}

                cvc={cvc}
                cvcHandler={cvcHandler}

                formSubmitHandler={formSubmitHandler}
            />}

            {!isEditing && <CardSaved setIsEditing={setIsEditing} />}
        </div>
    )
}

export default Container