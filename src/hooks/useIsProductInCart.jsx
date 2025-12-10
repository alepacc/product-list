import { useCart } from "../context/CartContext";

export const useIsProductInCart = (productName) => {
  const { listCart } = useCart();
  return listCart.some(item => item.name === productName && item.quantity > 0);
};
