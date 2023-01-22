import './Card.css';

function Card({Id, Name, Img,  Description, link}) {
    return (
        <div className='card' id={Id}>
            <div className='card_header'>
                <h2>{Name}</h2>
            </div>
            <img src={Img}/>
            <p>{Description}</p>
        </div>
    )
}

export default Card