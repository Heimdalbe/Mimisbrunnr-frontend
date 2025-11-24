import './Kernwaarden.css';

const Kernwaarde = ({ nr, waarde }) => {
  return (
    <div className='kernwaarde'>
      <h2 className='waarde-nr'>{nr}</h2>
      <h3>{waarde}</h3>
    </div>
  )
}

export default Kernwaarde;