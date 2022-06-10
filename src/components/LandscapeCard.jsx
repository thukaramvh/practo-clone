import React, { useState, useEffect } from 'react';
import { useCart } from './../context/cartContext';
import './Card.css';
import { Button } from '@chakra-ui/react';
import { removeFromCart } from './../service/removeFromCart';
import { useAuth } from './../context/authContext';
import { increaseQuantity } from './../service/increaseQuantity';
import { decreaseQuantity } from './../service/decreaseQuantity';

function LandscapeCard({ _id, price, title, qty, imgSrc, rating }) {
  // const { removeFromCart, decreaseQuantity, increaseQuantity } = useCart();
  const { authState } = useAuth();
  const { cartDispatch, cartState } = useCart();
  // console.log(cartDispatch);
  const [disabled, setDisabled] = useState(false);
  console.log(cartState);
  return (
    <>
      <div className="card-landscape">
        <img src={imgSrc} />
        <div className="card-content">
          <h3>{title}</h3>
          <div className="price">
            <h2>Rs. {price}</h2>
          </div>

          <div className="quantity-container">
            <button
              className="increase-btn"
              onClick={() =>
                increaseQuantity(_id, authState.token, cartDispatch)
              }
            >
              +
            </button>
            <input value={qty} className="quantity-input" type="number" />
            <button
              disabled={disabled}
              className="decrease-btn"
              onClick={() => {
                // setDisabled(true);
                decreaseQuantity(_id, authState.token, cartDispatch);
              }}
            >
              -
            </button>
          </div>
          <Button
            onClick={() => removeFromCart(_id, authState.token, cartDispatch)}
            colorScheme="blue"
          >
            Remove From Cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default LandscapeCard;
