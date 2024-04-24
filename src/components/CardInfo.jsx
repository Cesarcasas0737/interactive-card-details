import { useState } from "react"
import EditCardName from "./Edit/EditCardName"
import EditCardNumber from "./Edit/EditCardNumber"
import EditCardExpiration from "./Edit/EditCardExpiration"
import EditCardCvv from "./Edit/EditCardCvv"

import DisplayCardName from "./Display/DisplayCardName"
import DisplayCardExpiration from "./Display/DisplayCardExpiration"
import DisplayCardCvv from "./Display/DisplayCardCvv"
import DisplayCardNumber from "./Display/DisplayCardNumber"



export default function CardInfo(){
    const [creditCard, setCreditCard] = useState({
        number: 1234_5678_9012_3456,
        name: 'James Smith',
        expirationDate: {
            month: '09',
            year: '25',
        },
        cvv: '092',
    })

    return(
        <>
        <EditCardName
            creditCard={creditCard}
            setCreditCard={setCreditCard}
        />

        <EditCardNumber
            creditCard={creditCard}
            setCreditCard={setCreditCard}
        />

        <EditCardExpiration
            creditCard={creditCard}
            setCreditCard={setCreditCard}
        />

        <EditCardCvv 
            creditCard={creditCard}
            setCreditCard={setCreditCard}
        />

        <div className=" sm:bg-slate-600">
            <div className=" bg-blue-300 bg-[url('src/assets/bg-card-front.png')] bg-no-repeat ">
                <DisplayCardNumber 
                number={creditCard.number}
                />
                <DisplayCardName
                    name={creditCard.name}
                />
                <DisplayCardExpiration
                    expirationDate={creditCard.expirationDate}
                />
            </div>

            <div className=" bg-red-200 bg-[url('src/assets/bg-card-back.png')] bg-no-repeat">
                <DisplayCardCvv 
                    cvv={creditCard.cvv}
                />
            </div>
        </div>

   
       

        
            

        </>
    )
}