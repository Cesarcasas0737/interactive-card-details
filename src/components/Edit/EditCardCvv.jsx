export default function EditCardCvv({creditCard, setCreditCard}){

    function handleCvvChange(e){
        setCreditCard({
            ...creditCard,
            cvv: e.target.value
        })
    }
    
    return(
        <>
           <label >
                Credit Card Cvv:
                <input
                    value ={creditCard.cvv}
                    onChange={handleCvvChange} 
                    maxLength={4} 
                />
            </label> 
        </>
    )
}