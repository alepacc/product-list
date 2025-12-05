import Data from '../services/Data';
import ProductCard from './ProductCard';


function ProductList() {
  const products = Data();

      // image: {
        //     thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
        //     mobile: "./assets/images/image-waffle-mobile.jpg",
        //     tablet: "./assets/images/image-waffle-tablet.jpg",
        //     desktop: "./assets/images/image-waffle-desktop.jpg"
        // },
  return (
    <div className="product-list">
      {products.map(item => (
          <ProductCard 
              name={item.name} 
              category={item.category} 
              price={item.price.toFixed(2)}
              image={item.image.mobile} 
              key={item}
          />  
      ))}
    </div>
  );
}



export default ProductList;