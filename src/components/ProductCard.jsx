import ButtonCart from './ButtonCart';

function ProductCard({ name, category, price, image }) {
  let categoryId = category.toLowerCase().split(' ').join('-');
  
  return (
    <div className="product-card" id={categoryId} key={categoryId}>
      <div className="product-card__header">
        <img src={image} alt={name} className="product-card__image" />
          
        <ButtonCart productName={categoryId} />
      </div>
      
      <p className="product-card__category">{category}</p>
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__price">${price}</p>

    </div>
  );
}

export default ProductCard;
