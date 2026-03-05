import { Link } from "react-router-dom";
import capitalize from "../../utils/capitalize";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ children }) => {
  return (
    <div className="breadcrumb-wrapper">
      <Link className="home" to={"/"}>
        {"Home > "}
      </Link>
      {children.map((c) => (
        <Link
          to={c.link}
        >{`${capitalize(c.link)} ${c.isLast ? "" : "> "}`}</Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
