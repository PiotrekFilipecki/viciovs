import React from "react";

const CartNavigation = props => {
  return (
    <a href="#" className="Header__summary snipcart-summary snipcart-checkout">
      <div className="Header__summary__title">CART(<span className="snipcart-total-items"></span>)</div>
      {/* <div className="Header__summary__line">
        Number of items: 
      </div>
      <div className="Header__summary__line">
        Total price: <span className="snipcart-total-price"></span>
      </div> */}
    </a>
  );
};

export default CartNavigation;
