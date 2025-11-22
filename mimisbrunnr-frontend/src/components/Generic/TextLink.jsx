import { Link } from 'react-router-dom';

const TextLink = ({ text, link }) => {
  return (
    <Link to={link} className='text-link'>{text}</Link>
  )
}

export default TextLink;