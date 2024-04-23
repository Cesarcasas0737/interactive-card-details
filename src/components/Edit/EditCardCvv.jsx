export default function EditCardCvv({creditCard, setCreditCard}){

    function handleCvvChange(e){
        const inputValue = e.target.value;
        const numOnlyregex = /^\d{0,4}$/;

        if (numOnlyregex.test(inputValue)){
            setCreditCard({
            ...creditCard,
            cvv: inputValue
            })
        }
    }
    
    return(
        <>
           <label >
                cvc
                <input
                    value ={creditCard.cvv}
                    onChange={handleCvvChange}
                    placeholder='e.g. 123'
                />
            </label> 
        </>
    )
}