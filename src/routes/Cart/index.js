import React, { useState } from 'react'
import './index.css'

const dummyCartItems = [
  { id: 1, name: 'Mango Pickle', price: 120, quantity: 2 },
  { id: 2, name: 'Garlic Pickle', price: 100, quantity: 1 },
]

function Cart() {
  const [cartItems, setCartItems] = useState(dummyCartItems)

  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    )
  }

  const removeItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price} x {item.quantity}</p>
                </div>
                <div className="actions">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button className="remove" onClick={() => removeItem(item.id)}>✕</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="subtotal">
            <h3>Subtotal: ₹{subtotal}</h3>
            <button className="checkout">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
