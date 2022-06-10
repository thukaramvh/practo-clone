import React from 'react';
import { Link } from 'react-router-dom';
import './NoItemFound.css';
export const NoItemFound = ({ component }) => {
  return (
    <div>
      <img
        className="no-item-img"
        src="https://raw.githubusercontent.com/Kevin-Solomon/football-ecommerce/dev/src/assets/noitemfound.jpg"
      ></img>
      <p>
        Your {component} is empty. Click the button the button below to add
        items to your {component}
      </p>
      <div className="center">
        <Link to="/product">
          <button className="btn primary-btn">Back To Menu</button>
        </Link>
      </div>
    </div>
  );
};
