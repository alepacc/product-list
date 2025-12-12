import { useCart } from "../context/CartContext";

export const useIsProductInCart = (productName) => {
  const { listCart } = useCart();
  return listCart.some(item => item.category === productName && item.quantity > 0);
};
