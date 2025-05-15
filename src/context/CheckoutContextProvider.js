import React, {useState} from 'react';
import CheckoutContext from "./CheckoutContext";

const CheckoutContextProvider = ({children}) => {
    const [subtotal,setSubtotal] = useState(0) 
    return (
        <CheckoutContext.Provider value={{subtotal , setSubtotal}}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutContextProvider;