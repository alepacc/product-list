import { useState } from "react";   
import { useCart } from "../context/CartContext";


function ButtonCart({ productName }) {
    const {listCart, incrementCounter, decrementCounter} = useCart();
    const quantity = (listCart || []).find(item => item.name === productName)?.quantity || 0;
    return (
        <>     
        {/* TODO: button quantity 
        TODO: add border img*/}
        { 
          quantity === 0 ? (
          <button className="product-card__btn" onClick={() => incrementCounter(productName)}>
            <img src="./assets/images/icon-add-to-cart.svg" alt="Add to cart icon" />
            Add to cart
          </button>
          ): (
          <div className="product-card__btn product-card__btn--added" disabled>
            <button className="btn-counter decrement" onClick={() => decrementCounter(productName)}>
              <img src="./assets/images/icon-decrement-quantity.svg" alt="Decrement icon"/>
            </button>
            <span>{quantity}</span>
            <button className="btn-counter" onClick={() => incrementCounter(productName)}>
              <img src="./assets/images/icon-increment-quantity.svg" alt="Increment icon" />
            </button>
            
          </div>
        )}
        </>
    );
}

export default ButtonCart;