import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/huisstijl"}>Bekijk huisstijl</Link>
      </div>
    </nav>
  )
}

export default Navbar;