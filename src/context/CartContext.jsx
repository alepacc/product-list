import { createContext, useContext, useState } from "react";

// create context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [listCart, setListCart] = useState([]);

  const incrementCounter = (productName) => {
    setListCart((prevListCart) => {
      const itemExists = prevListCart.find(item => item.name === productName);
      if (itemExists){
        return prevListCart.map((item) => {
          return item.name === productName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        });
      }
      return [...prevListCart, {name: productName, quantity: 1}];
    });
  };

  const decrementCounter = (productName) => {
    setListCart((prevListCart) => {
      return prevListCart.map((item) => 
        item.name === productName
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0);
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



