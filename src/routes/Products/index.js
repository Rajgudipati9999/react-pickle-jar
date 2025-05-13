import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";
import { FaSearch } from "react-icons/fa";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All Products");
  const [allProducts, setAllProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://picklejar-backend.onrender.com/api/products"
        );
        const json = await response.json();
        const data = json.default || json;
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getFilteredProducts = () => {
    const categories = Object.keys(allProducts);

    if (activeTab === "All Products") {
      // Combine all category arrays
      return categories.flatMap((category) =>
        allProducts[category].filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      return (allProducts[activeTab] || []).filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <>
      <Navbar />
      <div className="products-page">
        <div className="controls">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search pickles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="product-tabs">
          {["All Products", "veg", "non-veg", "sweets"].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "All Products" && "All Products"}
              {tab === "veg" && "Veg Pickles"}
              {tab === "non-veg" && "Non-Veg Pickles"}
              {tab === "sweets" && "Sweets"}
            </button>
          ))}
        </div>

          {loading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            <ul className="product-list">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    color: "green",
                    fontWeight: "bold",
                    fontFamily: "ubuntu",
                  }}
                >
                  No products found.
                </p>
              )}
            </ul>
          )}
      </div>
      <Footer />
    </>
  );
}

export default Products;
