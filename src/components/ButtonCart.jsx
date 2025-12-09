import { useState } from "react";   
import { useCart } from "../context/CartContext";


function ButtonCart({ productName }) {
    const {listCart, incrementCounter, decrementCounter} = useCart();
    const quantity = listCart.find(item => item.name === productName)?.quantity || 0;
    return (
        <>     
        {/* TODO: button quantity 
        TODO: add border img*/}
        { 
          quantity === 0 ? (
          <button className="product-card__btn" onClick={() => incrementCounter(productName)}>
            <img src="assets/images/icon-add-to-cart.svg" alt="Add to cart icon" />
            Add to cart
          </button>
          ): (
          <button className="product-card__btn product-card__btn--added" disabled>
            <button onClick={() => decrementCounter(productName)}>
              <img src="assets/images/decrement-icon.svg" alt="Decrement icon" />
            </button>
            <span>{quantity}</span>
            <button onClick={() => incrementCounter(productName)}>
              <img src="assets/images/increment-icon.svg" alt="Increment icon" />
            </button>
          </button>
        )}
        </>
    );
}

export default ButtonCart;