import React, { useState, useEffect } from 'react';
import { useCart } from './../context/cartContext';
import './Card.css';

function LandscapeCard({ _id, price, title, qty, imgSrc, rating }) {
  // const { removeFromCart, decreaseQuantity, increaseQuantity } = useCart();
  const [disabled, setDisabled] = useState(false);
  console.log(title);
  return (
    <>
      <div className="card-landscape">
        <img src={imgSrc} />
        <div className="card-content">
          <h3>{title}</h3>
          <div className="price">
            <h2>{price}</h2>
          </div>

          <div className="quantity-container">
            <button
              className="increase-btn"
              // onClick={() => increaseQuantity(_id)}
            >
              +
            </button>
            <input value={qty} className="quantity-input" type="number" />
            <button
              disabled={disabled}
              className="decrease-btn"
              onClick={() => {
                setDisabled(true);
                // decreaseQuantity(_id, qty, setDisabled, name);
              }}
            >
              -
            </button>
          </div>
          <button
            className="btn primary-btn"
            onClick={() => {
              // removeFromCart(_id, name);
            }}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default LandscapeCard;
