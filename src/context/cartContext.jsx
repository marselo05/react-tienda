import React, { createContext, useState } from "react";

const CartContext = createContext({}); 

export const CartProvider = ({ children }) => 
{
    const [cart, setCart] = useState([]);
    const [carrito, setCarrito] = useState([]);
     
    const inCart = (id) => cart.some((item) => item.id === id);
    const addToCart = (item, quantity) => {
        if (inCart(item.id)) {
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: quantity,
                    };
                } else {
                    return cartItem;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };
    console.log(cart)
    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                inCart,
                carrito,
                setCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;