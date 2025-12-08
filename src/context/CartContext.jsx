import { createContext, useContext, useState } from "react";

// create context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [listCart, setListCart] = useState([]);

  const incrementCounter = (productName) => {
    setListCart((prevListCart) => {
      return prevListCart.map((item) => {
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    });
  };

  const decrementCounter = (productName) => {
    setListCart((prevListCart) => {
      prevListCart.map((item) => {
        item.name === productName
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    });
  };

  const contexValue = {listCart, setListCart, incrementCounter, decrementCounter};

  return (
    <CartContext.Provider value={contexValue}>
        {children}
    </CartContext.Provider>
  )

};


export const useCart = () => {
    return useContext(CartContext);
} 



