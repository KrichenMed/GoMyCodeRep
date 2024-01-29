// Cart.js
import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
