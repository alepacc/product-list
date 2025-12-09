import Data from '../services/Data';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';


function ProductList() {
  const products = Data();

  // const {setListCart} = useCart();

  // setListCart(() => products.map((item, index) => ({
  //   id: index, 
  //   name: item.category.toLowerCase().split(" ").join("-"), 
  //   quantity: 0
  // })));

      // image: {
        //     thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
        //     mobile: "./assets/images/image-waffle-mobile.jpg",
        //     tablet: "./assets/images/image-waffle-tablet.jpg",
        //     desktop: "./assets/images/image-waffle-desktop.jpg"
        // },
  return (
    <div className="product-list">
      {products.map((item, index) => (
        <ProductCard  
          key={index}
          name={item.name} 
          category={item.category} 
          price={item.price.toFixed(2)}
          image={item.image.mobile} 
        />  
      ))}
    </div>
  );
}



export default ProductList;