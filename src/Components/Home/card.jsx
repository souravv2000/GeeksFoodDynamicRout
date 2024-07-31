import './card.css'


function Card(obj){
    return (<>
    <div className='card-container'>
        <div className='upper-container'>
        <p>{obj.card_para}</p></div>
        <div className='inner-container'>
            <img src={obj.cardImage} alt="" />
            <div className='info'>
                <p>{obj.name}</p>
                <p>{obj.position}</p>
            </div>
        </div>
    </div>
    </>)
}
export default Card;