import { Link } from 'react-router-dom';
import './SmallFooterLinks.css';

//TODO: Cookie policy link toevoegen
//TODO: Privacy policy link toevoegen

const SmallFooterLinks = () => {
  return (
    <div className='links-section'>
      <Link className='link'>Cookie Policy</Link>
      <Link className='link'>Privacy Policy</Link>
    </div>
  )
}

export default SmallFooterLinks;