import { createContext, useContext, useState } from "react";

// create context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [listCart, setListCart] = useState([]);

  const incrementCounter = (product) => { 
    const productCategory = product.category.toLowerCase().split(" ").join("-");

    setListCart((prevListCart) => {
      const itemExists = prevListCart.find(item => item.category === productCategory);
      if (itemExists){
        return prevListCart.map((item) => {
          return item.category === productCategory
            ? { ...item, quantity: item.quantity + 1 }
            : item
        });
      }
      return [...prevListCart, {category: productCategory, name: product.name, price: product.price, image: product.image, quantity: 1}];
    });
  };

  const decrementCounter = (product) => {
    const productCategory = product.category.toLowerCase().split(" ").join("-");
    setListCart((prevListCart) => {
      return prevListCart.map((item) => 
        item.category === productCategory
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0);
    });
  };

  const removeItem = (product) => {
    const productCategory = product.category.toLowerCase().split(" ").join("-");
    setListCart((prevListCart) => {
      return prevListCart.filter(item => item.category !== productCategory);
    });
  };


  const totalPrice = listCart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0).toFixed(2);


  /**
   * Context value object for the shopping cart.
   * @typedef {Object} CartContextValue
   * @property {Array} listCart - Array of items currently in the cart
   * @property {Function} setListCart - Function to update the entire cart list
   * @property {Function} incrementCounter - Function to increase the quantity of an item in the cart
   * @property {Function} decrementCounter - Function to decrease the quantity of an item in the cart
   * @property {Function} removeItem - Function to remove item from the cart
   * @property {number} totalPrice - Total price of all items in the cart
   */
  const contexValue = {listCart, setListCart, incrementCounter, decrementCounter, removeItem, totalPrice};

  return (
    <CartContext.Provider value={contexValue}>
      {children}
    </CartContext.Provider>
  )

};


export const useCart = () => {
    return useContext(CartContext);
} 



