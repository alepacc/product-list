import { useCart } from "../context/CartContext";
import { useIsProductInCart } from "../hooks/useIsProductInCart";
import Data from "../services/Data";

function Cart() {
  const { listCart, totalPrice, removeItem } = useCart();

//   listCart.forEach((item) => {
//     //Create a products object with id as key and item details as value
//     const productsData = Data();
//     const productDetails = productsData.find(
//       (product) => product.name.toLowerCase().split(" ").join("-") === item.name
//     );
//     item.price = productDetails ? productDetails.price : 0;
//   });
  


  const totalItems = (listProduct) => {
    let totalItems = 0;
    listProduct
      .map((item) => {
        totalItems += item.quantity;
      })
    //   .filter(item => item.quantity > 0);;
    return totalItems;
  };

  const items = totalItems(listCart);

  if (items === 0) {
    return (
      <div className="cart">
        <h2 className="cart__title"> 
          Your Cart (0)
        </h2>
        <img
          src="./assets/images/illustration-empty-cart.svg"
          alt="empty cart"
        ></img>
        <h3 className="info">Your added items will appears here</h3>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h2 className="cart__title"> 
          Your Cart ({items})
        </h2>
        {/* Cart items will be displayed here */}
        <div className="cart__items">
          {/* foreach element */}
          {listCart.map(
            (item, index) =>
              item.quantity > 0 && (
                <>
                  <div className="item" key={index}>
                    <section className="left-side">
                        <h3 className="item__name">{item.name}</h3>
                        <p className="item__details">
                        <span className="item__quantity-number">
                            {item.quantity}x
                        </span>
                        @ ${(item.price).toFixed(2)}
                        <span className="item__total-price">
                            ${(item.quantity * item.price).toFixed(2)}
                        </span>
                        </p>
                    </section>
                    <aside className="right-side">
                        <button className="item__remove-button" onClick={() => removeItem(item)}>
                        <img
                            src="./assets/images/icon-remove-item.svg"
                            alt="Remove item"
                        ></img>
                        </button>
                        </aside>
                    </div>

                  <hr />
                </>
              )
          )}
        </div>
        <div className="cart__footer">
          <span className="cart__total">
            Order Total <h2 className="cart__total-price">${totalPrice}</h2>
          </span>
          <section className="cart__info">
            <img src="./assets/images/icon-carbon-neutral.svg" alt="carbon neutral" />
            <p>This is a <b>carbon-neutral</b> delivery</p>
          </section>
          <button className="cart__order" onClick={() => alert("Order confirmed!")}>
            Confirm Order
          </button>
        </div>
      </div>
    );
  }
}
export default Cart;
