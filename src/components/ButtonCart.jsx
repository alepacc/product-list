import { useState } from "react";   
import { useCart } from "../context/CartContext";


function ButtonCart({ productName }) {
    const {listCart, incrementCounter, decrementCounter} = useCart();
    const quantity = listCart.find(item => item.name === productName)?.quantity;
    return (
        <>     
        {/* TODO: button quantity 
        TODO: add border img*/}
        { 
          quantity === 0 ? (
          <button className="product-card__btn" onClick={incrementCounter}>
            <img src="assets/images/icon-add-to-cart.svg" alt="Add to cart icon" />
            Add to cart
          </button>
          ): (
          <button className="product-card__btn product-card__btn--added" disabled>
            <img src="assets/images/decrement-icon.svg" alt="Decrement icon" />
            {quantity}
            <img src="assets/images/increment-icon.svg" alt="Increment icon" />
          </button>
        )}
        </>
    );
}

export default ButtonCart;