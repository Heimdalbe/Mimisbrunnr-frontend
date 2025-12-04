import './Event.css';

const EventChip = ({ open }) => {
  return (
    <span className={`chip ${open ? 'open' : 'closed'}`}>
      {open ? 'Open' : 'Gesloten'}
    </span>
  );
}

export default EventChip;