import React from 'react';
import LandscapeCard from './../components/LandscapeCard';
import Navbar from '../components/Navbar';
import './Cart.css';
import CartSummary from '../components/CartSummary';
// import CartSummary from './components/CartSummary/CartSummary';
import { useCart } from './../context/cartContext';
function Cart() {
  const { cartState } = useCart();
  console.log(cartState);
  return (
    <>
      <Navbar />

      <main>
        <div className="cart-container">
          <div className="cart-card-container">
            {cartState.cart.map(item => {
              return (
                <LandscapeCard
                  _id={item._id}
                  price={item.price}
                  title={item.title}
                  qty={item.qty}
                  imgSrc={item.imgSrc}
                  rating={item.rating}
                />
              );
            })}
          </div>
          <CartSummary />
        </div>
      </main>
    </>
  );
}

export default Cart;
