import star from './star.png'

export default function Card(props) {
    let badgeText;
    if(props.car.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if(props.car.location === "Online") {
        badgeText =  "ONLINE";
    }

    return (
    <div className='card'>
        {badgeText && <div className='status'>{badgeText}</div>}
        <img src={`images/${props.car.coverImg}`} className='swim' alt='img'/>
        <span>
            <img src={star} className="star"/>
            <small className='small'>{props.car.stats.rating} ({props.car.stats.reviewCount}) - {props.car.country}</small>
        </span>
        <p className='lesson'>{props.car.title}</p>
        <p className='lastp'><b>From ${props.car.price}</b> / person</p>
    </div>
  )
}
