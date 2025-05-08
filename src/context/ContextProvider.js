import React,{useState,useEffect} from 'react';
import CartContext from './CartContext';

const CartProvider = ({children}) => {
    const [cart,setCart ]= useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        const saveCart = () => {
            localStorage.setItem('cart',JSON.stringify(cart))
        }
        saveCart()
    })
    return (
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
   
}

export default CartProvider;