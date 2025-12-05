function ProductCard({ name, category, price, image }) {
  let categoryId = category.toLowerCase().split(' ').join('-');
  
  return (
    <div className="product-card" id={categoryId} key={categoryId}>
      <img src={image} alt={name} className="product-card__image" />
      <button className="product-card__btn" >
        <img src="assets/images/icon-add-to-cart.svg" alt="Add to cart icon" />
        Add to cart
      </button>

      <p className="product-card__category">{category}</p>
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__price">${price}</p>

    </div>
  );
}

export default ProductCard;
