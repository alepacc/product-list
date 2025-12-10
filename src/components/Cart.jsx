import { useCart } from "../context/CartContext";
import { useIsProductInCart } from "../hooks/useIsProductInCart";



function Cart() {
  
    const { listCart, totalPrice, clearCart } = useCart();

    if (listCart.length === 0) return <p>Il carrello è vuoto</p>;
   
    return (
        <div className="cart">
        <h2>Your Cart (<span className="total-title">...</span>)</h2>
        {/* Cart items will be displayed here */}
        <div className="cart__items">
            
            {/* foreach element */}
            {listCart.map(item => item.quantity > 0 &&
            <>
                <div className="item" key={item.name}>
                    <h3 className="item__name">{item.name}</h3>
                    <p className="item__details">
                        <span className="item__quantity-number">
                            {item.quantity}x
                        </span> @ ${item.price}.toFixed(2) 
                        <span className="item__total-price">
                            ${(item.quantity * item.price).toFixed(2)}
                        </span>
                    </p>
                    <button className="item__remove-button">
                        <img src="./assets/images/icon-remove-item.svg" alt="Remove item"></img>
                    </button>
                </div>
                <br/>
            </>
            )}
        </div>
        <div className="cart__footer">
            <p className="cart__total">
                Total: <span className="cart__total-price">totale</span>
            </p>
            <button className="cart__clear-button" onClick={clearCart}>
                Clear Cart
            </button>
        </div>
    </div>
    );

}
export default Cart;