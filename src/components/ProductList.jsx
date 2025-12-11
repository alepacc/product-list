import Data from '../services/Data';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';


function ProductList() {
  const products = Data();

  const {setListCart} = useCart();

  // useEffect(() => { // wrap logic with useEffect
  //   setListCart(() => products.map((item, index) => ({
  //     id: index, 
  //     name: item.name,
  //     category: item.category.toLowerCase().split(" ").join("-"), 
  //     price: item.price,
  //     image: item.image,
  //     quantity: 0
  //   })));
  // }, [products, setListCart]); // add dependencies

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
          product={item}
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