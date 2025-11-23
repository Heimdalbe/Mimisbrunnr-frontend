import { Link } from "react-router-dom";

const PrimaryButton = ({ text, to, isLight, isDisabled }) => {
  const className = [
    isLight ? "primary-button" : "primary-button-dark",
    isDisabled ? "disabled" : ""
  ].join(" ");

  return (
    <Link
      to={to}
      className={className}
    >
        {text}
    </Link>
  )
}

export default PrimaryButton;