import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    // Simulate fetching product by ID
    const dummyProduct = {
      id,
      name: 'Spicy Mango Pickle',
      description: 'Traditional spicy mango pickle made with love and organic ingredients.',
      price: 120,
      image: 'https://res-console.cloudinary.com/dx8rhno8y/thumbnails/v1/image/upload/v1744713387/Y2hpY2tlbmJvbmVsZXNzX3dpeWYxag==/drilldown',
    }
    setProduct(dummyProduct)
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
