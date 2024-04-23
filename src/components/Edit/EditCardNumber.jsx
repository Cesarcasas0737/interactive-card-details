export default function EditCardNumber({creditCard, setCreditCard}){

    function handleNumberChange(e){
        const inputValue = e.target.value;
        const regex = /^\d{0,16}$/;

        if (regex.test(inputValue)){
            setCreditCard({
                ...creditCard,
                number: inputValue
            })
        } 
    }
    

    return(
        <>
           <label >
                Credit Card Number:
                <input
                    value ={creditCard.number}
                    onChange={handleNumberChange} 
                    placeholder='e.g.123456789123'
                    type="text"
                />
            </label> 
        </>
    )
}