import './SchildInfo.css';
import TextLink from '../../../Generic/TextLink';

//TODO: Link achter 'lees meer' aanvullen.

const SchildInfo = () => {
  return (
    <div className='info-section'>
      <div>
        <img className='schild' src='./Schild1.png' alt='Heimdal schild' />
      </div>
      <div className='text-section'>
        <h1 className='titel'>Heimdal</h1>
        <p className='text'>
          De thuisbasis voor geeky studenten aan Hogeschool Gent.
          Een studentenvereniging door en voor studenten, waar passie en interesses gedeeld en gevierd worden.
        </p>
        <TextLink text={"Lees meer ..."} />
      </div>
    </div>
  )
}

export default SchildInfo;