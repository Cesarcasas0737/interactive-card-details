export default function EditCardName({creditCard, setCreditCard}){
    const alphaOnlyRegex = /^[a-zA-Z\s]*$/
    

    function handleNameChange(e){
        const inputValue = e.target.value;

        if (alphaOnlyRegex.test(inputValue)){
            setCreditCard({
            ...creditCard,
            name: inputValue
            })
        }  
    }
    

    return(
        <>
           <label>
                Name:
                <input
                    value ={creditCard.name}
                    onChange={handleNameChange}
                    placeholder='John Smith'
                />
            </label> 
        </>
    )
}