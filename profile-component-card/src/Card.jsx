import './card.css';
import BottomCard from './BottomCard.jsx';

function Card ({className, image,name, age, place, followers, likes, photos}){
    return (
        <div className = 'container-card'>
            <div className="top-card-container">
                <img src ={image} alt='top-card-avatar' class='avatar-img' />
            </div>
            <div className="middle-card-container">
                <div className="top-middle">
                    <h1>{name}</h1>
                    <span>{age}</span>
                </div>
                <div className='lower-middle'>
                    <p>{place}</p>
                </div>
                
            </div>
            <div className='bottom-card-container'>
                <BottomCard title = {followers}
                placeholder = 'Followers'/>
                <BottomCard title = {likes}
                placeholder= 'Likes'/>
                <BottomCard title = {photos}
                placeholder='Photos'/>
                
            </div>
        </div>
    )
}

export default Card;