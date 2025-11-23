import './SchildInfo.css';

//TODO: Link achter 'lees meer' aanvullen.

const SchildInfo = () => {
  return (
    <div className='info-section'>
      <img className='schild' src='./Schild1.png' alt='Heimdal schild' />
      <div>
        <h1 className='titel'>Heimdal</h1>
        <p className='text'>
          De thuisbasis voor geeky studenten aan Hogeschool Gent.
          Een studentenvereniging door en voor studenten, waar passie en interesses gedeeld en gevierd worden.
        </p>
        <a href='#'> Lees meer ...</a>
      </div>
    </div>
  )
}

export default SchildInfo;