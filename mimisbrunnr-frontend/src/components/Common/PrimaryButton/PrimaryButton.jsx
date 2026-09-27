import { Link } from 'react-router-dom';
import './PrimaryButton.css';

const PrimaryButton = ({ text, to, isLight, hasNoMarginBottom, isDisabled, onClick, className: customClassName }) => {
  const className = [isLight ? 'primary-button' : 'primary-button-dark', isDisabled ? 'disabled' : '', customClassName]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      style={hasNoMarginBottom ? { marginBottom: 0 } : undefined}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
