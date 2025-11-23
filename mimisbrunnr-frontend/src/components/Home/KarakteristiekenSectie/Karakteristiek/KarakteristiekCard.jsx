import './KarakteristiekCard.css';

const KarakteristiekCard = ({ iconClass, name, text }) => {
  return (
    <div className='characteristic-card'>
      <div className='circle'>
        <i className={iconClass}></i>
      </div>
      <div className='characteristic-text'>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default KarakteristiekCard;