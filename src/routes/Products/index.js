import React, { useState,useEffect} from 'react'
import ProductCard from '../../components/ProductCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './index.css'
import { FaSearch } from 'react-icons/fa'

function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [activeTab, setActiveTab] = useState('All Products');


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(products)
  useEffect(() => {
    // Replace with your actual API URL
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://picklejar-backend.onrender.com/api/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


 const filteredProducts = products
  .filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter(product => product.category === activeTab)


  return (
    <>
    <Navbar/>
    <div className="products-page">
      <div className="controls">
        <div className="search-bar">
          <>
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search pickles..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          </>
        </div>

        {/* <select
          className="sort-select"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="price">Price (Low to High)</option>
          <option value="name">Price (High to Low)</option>
        </select> */}
      </div>
    <div className="product-tabs">
  {['All Products', 'veg', 'non-veg', 'snacks', 'sweets'].map(tab => (
    <button
      key={tab}
      className={`tab-button ${activeTab === tab ? 'active' : ''}`}
      onClick={() => setActiveTab(tab)}
    >
      {tab === 'All Products' && 'All Products'}
      {tab === 'veg' && 'Veg Pickles'}
      {tab === 'non-veg' && 'Non-Veg Pickles'}
      {tab === 'snacks' && 'Snacks'}
      {tab === 'sweets' && 'Sweets'}
    </button>
  ))}
</div>
    <ul className="product-list-container">
     {loading ? (
  <p style={{ textAlign: 'center' }}>Loading...</p>
) : (
  <>
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No products found.</p>
      )}
    </div>
  </>
)}
      </ul>
    </div>
    <Footer/>
    </>
  )
}

export default Products
