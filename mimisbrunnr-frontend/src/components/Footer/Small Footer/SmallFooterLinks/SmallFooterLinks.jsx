import { Link } from 'react-router-dom';

const SmallFooterLinks = () => {
  return (
    <div className='links-section'>
      <Link to={'/privacy-policy'}>Privacy Policy</Link>
    </div>
  );
};

export default SmallFooterLinks;