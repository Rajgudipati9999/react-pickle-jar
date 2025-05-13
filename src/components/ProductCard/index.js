import { Link } from 'react-router-dom'
import "./index.css";

function ProductCard({ product }) {
  return (
  <li key={product.id}>
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      <Link to={`/products/${product.id}`} className="details-button">
        View Details
      </Link>
    </div>
  </li>
  );
}

export default ProductCard;
