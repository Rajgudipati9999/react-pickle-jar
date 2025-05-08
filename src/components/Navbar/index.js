import { Link } from "react-router-dom";
import { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import CartContext from "../../context/CartContext";
import "./index.css";

function Navbar() {
  const {cart} = useContext(CartContext)
  const cartCount = cart.length;
  return (
    <nav className="navbar">
      <Link to='/'>
         <img src="refinedlogo.png" alt="logo" className="navbar-logo" />
     </Link>
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
              <ShoppingCartIcon/>
            </Badge>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
