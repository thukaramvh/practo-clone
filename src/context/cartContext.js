import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
function cartReducer(state, { payload, type }) {
  console.log(type, payload);
  switch (type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: [...payload] };
    case 'INC_ITEM':
      console.log(payload);
      return { cart: [...payload] };
    case 'DEC_ITEM':
      console.log(payload);
      return { cart: [...payload] };
    default:
      return new Error('error in cart reducer');
  }
}
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
