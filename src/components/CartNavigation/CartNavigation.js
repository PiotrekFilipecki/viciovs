import React from "react";

import cartNavigationStyles from './cartNavigation.module.css';

const CartNavigation = props => {
  return (
      <div className={cartNavigationStyles.snipcartCheckout}>
          <a href="" className="Header__summary snipcart-summary snipcart-checkout">
            <div className="Header__summary__title">CART(<span className="snipcart-total-items"></span>)</div>
            {/* <div className="Header__summary__line">
              Number of items: 
            </div>
            <div className="Header__summary__line">
              Total price: <span className="snipcart-total-price"></span>
            </div> */}
          </a>
      </div>
  );
};

export default CartNavigation;
