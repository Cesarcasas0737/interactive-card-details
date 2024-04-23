export default function EditCardExpiration({creditCard, setCreditCard}){
    
    function handleMonthChange(e) {
        setCreditCard({
          ...creditCard,
          expirationDate: {
            ...creditCard.expirationDate,
            month: e.target.value
          }
        });
    }

    function handleYearChange(e) {
        setCreditCard({
          ...creditCard,
          expirationDate: {
            ...creditCard.expirationDate,
            year: e.target.value
          }
        });
    }

    return(
        <>
            <label >
                Expire month:
                <input
                    value ={creditCard.expirationDate.month}
                    onChange={handleMonthChange} 
                    maxLength={2}
                    minLength={2}
                />
            </label> 

            <label >
                Expire Year:
                <input
                    value ={creditCard.expirationDate.year}
                    onChange={handleYearChange} 
                    maxLength={2}
                    minLength={2}
                    
                />
            </label> 
        </>
    )
}