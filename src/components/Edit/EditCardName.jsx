export default function EditCardName({creditCard, setCreditCard}){

    function handleNameChange(e){
        setCreditCard({
            ...creditCard,
            name: e.target.value
        })
    }
    

    return(
        <>
           <label>
                Name:
                <input
                    value ={creditCard.name}
                    onChange={handleNameChange}  
                />
            </label> 
        </>
    )
}