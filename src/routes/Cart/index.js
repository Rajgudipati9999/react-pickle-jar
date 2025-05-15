import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import CartContext from '../../context/CartContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CheckoutContext from '../../context/CheckoutContext'

function Cart() {
  const{cart,setCart} = useContext(CartContext)
  // const [cartItems, setCartItems] = useState(cart)
  const navigate = useNavigate()
  
  const {setSubtotal} = useContext(CheckoutContext)

  const updateQuantity = (id, amount) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    )
  }

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const onCheckout = () => {
    navigate('/checkout')
    setSubtotal(subtotal)
  }

  return (
    <>
    <Navbar/>
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className='cart-item-image'/>
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
            <button className="checkout" onClick={onCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
    <Footer/>
    </>
  )
}

export default Cart
