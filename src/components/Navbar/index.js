import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">PickleStore</div> */}
      <img src="refinedlogo.png" alt="logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li>
          <Link to="/" style={{color:'green'}}>Home</Link>
        </li>
        <li>
          <Link to="/products" style={{color:'green'}}>Products</Link>
        </li>
        <li>
          <Link to="/cart" style={{color:'green'}}>Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
