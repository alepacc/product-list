import { useCart } from "../context/CartContext";

function Order({ items, totalPrice, setShowOrder }) {
  const { setListCart } = useCart(); 


  const handleNewOrder = () => {
    setListCart([]); // 
    setShowOrder(false);
  };

  return (
    <div className="order card">
      <img src="./assets/images/icon-order-confirmed.svg" alt="icon-order-confirmed" />
      <h1>Order Confirmed</h1>
      <h3>We hope you enjoy your food!</h3>

      <div className="order__details card">
        {items.map((item, index) => (
          item.quantity > 0 && (
            <><div className="order__item" key={index}>
              <article>
                <img src={item.image?.thumbnail || "./assets/images/placeholder.png"} alt={item.name} />
                <section className="middle">
                  <h3 className="order__item-name">{item.name}</h3>
                  <p className="order__item-details">
                    <span className="order__item-quantity-number">
                      {item.quantity}x
                    </span>{"  "}
                    @ ${(item.price).toFixed(2)}
                  </p>
                </section>
              </article>
              <aside className="order__item-total-price">
                ${(item.quantity * item.price).toFixed(2)}
              </aside>
            </div><hr /></>
          )
        ))}
        <span className="cart__total">
          Order Total <h2 className="cart__total-price">${totalPrice}</h2>
        </span>
      </div>

      <button type="reset" className="btn-new-order" onClick={() => handleNewOrder()}>
        Start New Order
      </button>
    </div>
  );
}

export default Order;
