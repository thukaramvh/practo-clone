import React from 'react';
import { useAuth } from '../context/authContext';
import { useCart } from '../context/cartContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const getTotalPrice = cartList => {
  if (cartList.length === 0) return 0;
  return cartList.reduce((acc, initialValue) => {
    return acc + initialValue.price * initialValue.qty;
  }, 0);
};
function CartSummary() {
  const navigate = useNavigate();
  const { authState } = useAuth();
  console.log(authState);
  const { cartState, cartDispatch } = useCart();
  console.log(cartState);
  async function loadSdk() {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        console.log('loaded');
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function payHandler() {
    const response = await loadSdk();
    if (!response) return alert('Something went wrong with sdk');
    var options = {
      key_id: 'rzp_test_7EiY4hDu9fMvM7',
      key: 'rzp_test_7EiY4hDu9fMvM7',
      key_secret: 'cbxlj9Iw814xs1FDZsh9RWmi',
      amount: (199 + getTotalPrice(cartState.cart)) * 100,
      currency: 'INR',
      name: 'FootballHQ',
      description: 'Purchase',
      image: 'https://example.com/your_logo',

      handler: function (response) {
        cartDispatch({ type: 'CHECKOUT' });
        // navigate('/order');
      },
      prefill: {
        name: `${authState.user.firstName} ${authState.user.lastName}`,
        email: authState.user.email,
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    e.preventDefault();
    rzp1.on('payment.failed', function (response) {
      alert('Something went wrong', response.error.code);
    });
  }

  return (
    <>
      {cartState.cart.length === 0 ? (
        true
      ) : (
        // <NoItemFound component="cart" />
        <div className="cart-summary">
          <h2>Price Details</h2>
          <div className="price">
            <p>Price</p>
            <p>₹ {getTotalPrice(cartState.cart)}</p>
          </div>

          <div className="delivery">
            <p>Delivery Charges</p>
            <p>₹ 499</p>
          </div>
          <div className="total-amount">
            <p>Total Amount</p>
            <p>₹ {199 + getTotalPrice(cartState.cart)}</p>
          </div>
          <button
            className="btn primary-btn"
            onClick={() => {
              payHandler();
            }}
          >
            Place Order
          </button>
        </div>
      )}
    </>
  );
}

export default CartSummary;
