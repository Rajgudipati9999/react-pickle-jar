import React, { useEffect, useState ,useContext} from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './index.css'

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const {setCart} = useContext(CartContext)
  console.log(product)
  useEffect(() => {
    // Simulate fetching product by ID
   const fetchProduct = async () => {
      const response = await fetch(`https://picklejar-backend.onrender.com/api/products/${id}`)
      if (!response.ok) {
        throw new Error ('Failed to fetch product')
      }
      const data = await response.json()
      setProduct(data)
   }
   fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    alert(`Added ${product.name} to cart!`)
    // Hook this into cart logic
  }

  if (!product) return <p>Loading...</p>

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="description">{product.description}</p>
        <p className="price">₹{product.price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
