import React from 'react'
import './index.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="refinedlogo.png" alt='logo' className='navbar-logo'/>
          <p>Delicious homemade pickles delivered to your door.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support.picklejar@gmail.com</p>
          <p>Phone: +91 917757462</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pickle Jar. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
