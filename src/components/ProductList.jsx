import Data from '../services/Data';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';


function ProductList() {
  const products = Data();

  const {setListCart} = useCart();

  return (
    <div className="product-list">
      {products.map((item, index) => (
        <ProductCard  
          key={index}
          product={item}
          name={item.name} 
          category={item.category} 
          price={item.price.toFixed(2)}
          image={{thumbnail: item.image.thumbnail, 
            mobile: item.image.mobile, 
            tablet: item.image.tablet, 
            desktop: item.image.desktop}} 
        />  
      ))}
    </div>
  );
}



export default ProductList;