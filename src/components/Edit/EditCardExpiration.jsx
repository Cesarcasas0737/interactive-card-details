export default function EditCardExpiration({creditCard, setCreditCard}){

    const numOnlyRegex = /^\d{0,2}$/;

    function handleMonthChange(e) {
        const inputValue = e.target.value;

        if (numOnlyRegex.test(inputValue)){
            setCreditCard({
                ...creditCard,
                expirationDate: {
                  ...creditCard.expirationDate,
                  month: inputValue
                }
            });
        }
    }

    function handleYearChange(e) {
        const inputValue = e.target.value;

        if (numOnlyRegex.test(inputValue)){
            setCreditCard({
                ...creditCard,
                expirationDate: {
                  ...creditCard.expirationDate,
                  year: inputValue
                }
            });
        }
    }

    return(
        <>
            <label >
                EXP. DATE(MM/YY)
                <input
                    value ={creditCard.expirationDate.month}
                    onChange={handleMonthChange} 
                    placeholder='MM'
                />

                <input
                    value ={creditCard.expirationDate.year}
                    onChange={handleYearChange} 
                    placeholder='YY'
                />
            </label> 

        </>
    )
}