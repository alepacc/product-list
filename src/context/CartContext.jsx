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
            ? { ...item, quantity: item.quantity + 1, name: item.name, price: item.price }
            : item
        });
      }
      return [...prevListCart, {name: productName, quantity: 1, name: item.name, price: item.price }];
    });
  };

  const decrementCounter = (productName) => {
    setListCart((prevListCart) => {
      return prevListCart.map((item) => 
        item.name === productName
          ? { ...item, quantity: item.quantity - 1, name: item.name, price: item.price }
          : item
      ).filter(item => item.quantity > 0);
    });
  };

  const clearCart = () => {
    setListCart([]);
  };

  const totalPrice = listCart.reduce((total, item) => {
    return total + (item.price * item.quantity).toFixed(2);
  }, 0);

  /**
   * Context value object for the shopping cart.
   * @typedef {Object} CartContextValue
   * @property {Array} listCart - Array of items currently in the cart
   * @property {Function} setListCart - Function to update the entire cart list
   * @property {Function} incrementCounter - Function to increase the quantity of an item in the cart
   * @property {Function} decrementCounter - Function to decrease the quantity of an item in the cart
   * @property {Function} clearCart - Function to remove all items from the cart
   */
  const contexValue = {listCart, setListCart, incrementCounter, decrementCounter, clearCart, totalPrice};

  return (
    <CartContext.Provider value={contexValue}>
      {children}
    </CartContext.Provider>
  )

};


export const useCart = () => {
    return useContext(CartContext);
} 



