import { Link } from "react-router-dom";

const PrimaryButton = ({ text, to, isLight }) => {
  return (
    <Link
      to={to}
      className={isLight ? "primary-button" : "primary-button-dark"}
    >
        {text}
    </Link>
  )
}

export default PrimaryButton;