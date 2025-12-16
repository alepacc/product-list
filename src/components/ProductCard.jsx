import { useIsProductInCart } from '../hooks/useIsProductInCart';
import ButtonCart from './ButtonCart';

function ProductCard({ name, category, price, image, product}) {
  const categoryId = category.toLowerCase().split(' ').join('-');
  
  const isInCart = useIsProductInCart(categoryId);

  return (
    <div className="product-card" id={categoryId} key={categoryId}>
      <div className="product-card__header">
        <picture>
          <source media="(min-width: 1024px)" srcSet={image.desktop} />
          <source media="(min-width: 768px)" srcSet={image.tablet} />
          <source media="(min-width: 375px)" srcSet={image.mobile} />
          <img 
            src={image.mobile} 
            alt={name} 
            className={`product-card__image ${isInCart ? "active" : ""}`} 
          />
        </picture>
          
        <ButtonCart productName={categoryId} product={product} />
      </div>
      
      <p className="product-card__category">{category}</p>
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__price">${price}</p>

    </div>
  );
}

export default ProductCard;
