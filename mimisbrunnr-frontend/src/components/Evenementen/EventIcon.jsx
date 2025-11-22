import './EventIcon.css';

const EventIcon = ({ iconClass }) => {
  return (
    <div className='icon'>
      <i className={iconClass}></i>
    </div>
  )
}

export default EventIcon