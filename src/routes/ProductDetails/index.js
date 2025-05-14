import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Oval } from "react-loader-spinner";

import { useSnackbar } from "notistack";

import "./index.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { setCart } = useContext(CartContext);

  const { enqueueSnackbar } = useSnackbar();

  console.log(product);
  useEffect(() => {
    // Simulate fetching product by ID
    const fetchProduct = async () => {
      const response = await fetch(
        `https://picklejar-backend.onrender.com/api/products/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const audio = new Audio(
      "https://res.cloudinary.com/dx8rhno8y/video/upload/v1746968510/mixkit-soap-bubble-sound-2925_ri34uc.wav"
    );
    audio.volume = 0.5;
    audio.play();

    enqueueSnackbar(`${product.name} added to cart successfully!`, {
      variant: "success",
    });
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  if (!product)
    return (
      <div className="product-detail-loader-conatiner">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default ProductDetails;
