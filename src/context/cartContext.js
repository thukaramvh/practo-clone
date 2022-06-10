import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
function cartReducer(state, { payload, type }) {
  switch (type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...payload] };
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
