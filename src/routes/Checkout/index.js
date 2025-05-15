import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './index.css'
import CheckoutContext from '../../context/CheckoutContext'

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  })

  const {subtotal} = useContext(CheckoutContext)
  console.log(subtotal)

  const grandTotal = subtotal + 40 ;

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('Order placed successfully!')
  }


  return (
  <>
  <Navbar/>
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-grid">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Information</h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            required
            value={formData.postalCode}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <button type="submit" className="place-order-btn">Place Order</button>
        </form>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Items Total: {subtotal}</p>
          <p>Shipping: ₹40</p>
          <hr />
          <h4>Total: ₹{grandTotal}</h4>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Checkout
