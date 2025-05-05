import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import "./index.css";

function Navbar({ cartCount = 10 }) {
  return (
    <nav className="navbar">
      <img src="refinedlogo.png" alt="logo" className="navbar-logo" />

      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            <Badge badgeContent={cartCount} color="success">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
