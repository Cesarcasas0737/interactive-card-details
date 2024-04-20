import { useState } from "react"

export default function CardInfo(){
    const [creditCard, setCreditCard] = useState({
        number: '000000000000',
        name: 'James Smith',
        expirationDate: {
            month: '09',
            year: '25',
        },
        cvv: '092',
    })

    return(
        <>
        
        </>
    )
}