import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartScreen } from "../CartScreen";

export const CartComponent=()=>{
  const {cart,dispatch}=useContext(CartContext)

  return(
    <CartScreen
      cart={cart}
      dispatch={dispatch}
    />
  )
}