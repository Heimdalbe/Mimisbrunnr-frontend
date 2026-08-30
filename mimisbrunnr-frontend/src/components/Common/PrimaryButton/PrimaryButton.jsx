import { Link } from 'react-router-dom';
import './PrimaryButton.css';

const PrimaryButton = ({ text, to, isLight, isDisabled, onClick }) => {
  const className = [isLight ? 'primary-button' : 'primary-button-dark', isDisabled ? 'disabled' : ''].join(' ');

  if (to) {
    return (
      <Link to={to} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default PrimaryButton;
