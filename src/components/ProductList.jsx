import Data from '../services/Data';
import ProductCard from './ProductCard';

function ProductList() {
  const products = Data();

  return (
    <div className="product-list">
      {products.map((item, index) => (
        <ProductCard  
          key={index}
          product={item}
          name={item.name} 
          category={item.category} 
          price={item.price.toFixed(2)}
          image={item.image} 
        />  
      ))}
    </div>
  );
}



export default ProductList;