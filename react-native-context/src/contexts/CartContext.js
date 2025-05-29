import { useReducer,createContext } from "react";
// 장바구니 관리
// ContextAPI + Reducer
// 리듀서 ADD_ITEM : 추가
// REMOVE_ITEM : 제거
// 상품객체 id:name

export const CartContext=createContext();

// 이게 장바구니
// const initialItem=[] 
  


const CartReducer =(state,action)=>{
  switch(action.type){
    case "ADD_ITEM":
      return [...state, action.payload]
    case "REMOVE_ITEM":
      return state.filter(item=>item.id!== action.payload)
    default : return state
  }
}



export const CartProvider=({children})=>{
  const [cart,dispatch]=useReducer(CartReducer,[])
  
  return(
    <CartContext.Provider value={{cart,dispatch}}>
      {children}
    </CartContext.Provider>
  )
}