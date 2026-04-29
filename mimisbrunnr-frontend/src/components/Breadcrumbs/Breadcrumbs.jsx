import { Link } from "react-router-dom";
import capitalize from "../../utils/capitalize";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ children }) => {
  var link = "";
  return (
    <div className="breadcrumb-wrapper">
      <Link className="home" to={"/"}>
        {"Home > "}
      </Link>
      {children.map((c, i) => {
        link = `${link}/${c.link}`;
        return c.isLast ? (
          <span key={i} className="last-breadcrumb">
            {capitalize(c.link)}
          </span>
        ) : (
          <Link key={i} to={link}>{`${capitalize(c.link)} > `}</Link>
        )
      }
      )}
    </div>
  );
};

export default Breadcrumbs;
