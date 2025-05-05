// import { Link } from 'react-router-dom'
import "./index.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="price">Rs. {product.price} /-</p>
      <p to={`/products/${product.id}`} className="details-button">
        View Details
      </p>
    </div>
  );
}

export default ProductCard;
