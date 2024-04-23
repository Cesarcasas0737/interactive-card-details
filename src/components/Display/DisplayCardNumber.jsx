export default function DisplayCardNumber({number}){

    const cardNumSegments = [number]
    const cardNumString = cardNumSegments.toString();
    
    return(
        <div className="flex flex-row gap-3">
            <h1>{cardNumString.slice(0,4)}</h1>
            <h1>{cardNumString.slice(4,8)}</h1> 
            <h1>{cardNumString.slice(8,12)}</h1> 
            <h1>{cardNumString.slice(12,16)}</h1>      
        </div>
    )
}