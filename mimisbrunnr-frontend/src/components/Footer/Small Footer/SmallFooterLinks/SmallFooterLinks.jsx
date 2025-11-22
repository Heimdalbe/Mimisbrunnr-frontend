import { Link } from 'react-router-dom';

//TODO: Cookie policy link toevoegen
//TODO: Privacy policy link toevoegen

const SmallFooterLinks = () => {
  return (
    <div className='links-section'>
      <Link>Cookie Policy</Link>
      <Link>Privacy Policy</Link>
    </div>
  )
}

export default SmallFooterLinks;