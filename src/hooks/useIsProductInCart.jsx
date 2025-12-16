import { useCart } from "../context/CartContext";

export const useIsProductInCart = (productCategory) => {
  const { listCart } = useCart();
  return listCart.some(item => item.category === productCategory && item.quantity > 0);
};
