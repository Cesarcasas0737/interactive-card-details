export default function EditCardNumber({creditCard, setCreditCard}){

    function handleNumberChange(e){
        setCreditCard({
            ...creditCard,
            number: e.target.value
        })
    }
    

    return(
        <>
           <label >
                Credit Card Number:
                <input
                    value ={creditCard.number}
                    onChange={handleNumberChange} 
                    maxLength={16}
                    
                    
                    
                />
            </label> 
        </>
    )
}