import { ethers } from 'ethers';
import '../css/Card.css';

const Card = ({ occasion, toggle, setToggle, setOccasion, src }) => {
  const togglePop = () => {
    setOccasion(occasion);
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="event-card">
      <div className="event-card__image-container">
        <img src={src} alt={occasion.name} className="event-card__image" />
      </div>
      
      <div className="event-card__content">
        <div className="event-card__datetime">
          <span className="event-card__date">{occasion.date}</span>
          <span className="event-card__time">{occasion.time}</span>
        </div>

        <h3 className="event-card__title">{occasion.name}</h3>
        
        <div className="event-card__details">
          <div className="event-card__location">
            <i className="location-icon">📍</i>
            <span>{occasion.location}</span>
          </div>
          
          <div className="event-card__price">
            {ethers.utils.formatUnits(occasion.cost.toString(), 'ether')} $EDU
          </div>
        </div>

        {occasion.tickets.toString() === "0" ? (
          <button 
            type="button" 
            className="event-card__button event-card__button--sold-out" 
            disabled
          >
            Sold Out
          </button>
        ) : (
          <button 
            type="button" 
            className="event-card__button" 
            onClick={togglePop}
          >
            View Seats
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;