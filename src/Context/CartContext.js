import React, { useState } from "react";
import { useContext } from "react";

export const CartContext = React.createContext()
export const useCartContextProvider = ()=> useContext(CartContext)
const CartContextProvider = ({ children }) => {
  const [cart, serCart] = useState([]);
  const agregar = () => {
    console.log("Producto agregado");
  };

  return (
    <CartContext.Provider value={[agregar]}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
