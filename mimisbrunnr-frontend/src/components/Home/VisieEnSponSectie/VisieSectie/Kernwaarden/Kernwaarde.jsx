import './Kernwaarden.css';

const Kernwaarde = ({ nr, waarde }) => {
  return (
    <div className='kernwaarde'>
      <div className="waarde-nr">{nr}</div>
      <div className='waarde-text'>{waarde}</div>
    </div>
  )
}

export default Kernwaarde;