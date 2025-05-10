import React, { useState,useEffect} from 'react'
import ProductCard from '../../components/ProductCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './index.css'
import { FaSearch } from 'react-icons/fa'

function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('')

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
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
    // .sort((a, b) => {
    //   if (sortBy === 'price') return a.price - b.price
    //   if (sortBy === 'name') return a.price - b.price
    //   return 0
    // })

  return (
    <>
    <Navbar/>
    <div className="products-page">
      <div className="controls">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search pickles..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
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
    <h2 className="page-title">Non Veg Pickles</h2>
     {loading ? <p>Loading...</p> :  <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>}
    </div>
    <Footer/>
    </>
  )
}

export default Products
