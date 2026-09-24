import { Link } from 'react-router-dom';
import capitalize from '../../utils/capitalize';
import './Breadcrumbs.css';

const Breadcrumbs = ({ children, showHome = true }) => {
  var link = '';
  return (
    <div className="breadcrumb-wrapper">
      {showHome && (
        <>
          <Link className="home" to={'/'}>Home</Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </>
      )}
      {children.map((c, i) => {
        link = `${link}/${c.link}`;
        return c.isLast ? (
          <span key={i} className="last-breadcrumb">
            {capitalize(c.link)}
          </span>
        ) : (
          <span key={i}>
            <Link to={link}>{capitalize(c.link)}</Link>
            <span className="breadcrumb-separator"> &gt; </span>
          </span>
        );
      },
      )}
    </div>
  );
};

export default Breadcrumbs;
