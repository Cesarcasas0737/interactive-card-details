export default function DisplayCardExpiration({expirationDate}){

    return(
        <div>
            <h1>{expirationDate.month}</h1>
            <h1>{expirationDate.year}</h1>
        </div>
    )
}