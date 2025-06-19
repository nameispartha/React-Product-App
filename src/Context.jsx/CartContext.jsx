import {  createContext, useEffect, useState } from "react";


export const CartContextPartha = createContext();

export const CartProviderPartha = ({children}) =>{
    const [cart, setCart] = useState(()=>{
        const storedProducts = localStorage.getItem('cart');
        return storedProducts ? JSON.parse(storedProducts) : [];
    });

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    },[cart]);

    const AddToCart = (saman) =>{
        setCart([...cart, saman]);
    }

    return (
        <CartContextPartha.Provider value={{cart, AddToCart}}>
         {children}

        </CartContextPartha.Provider>
    )
}