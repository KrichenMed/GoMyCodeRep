// ShoppingCart.js
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ShoppingCart = ({ show, onHide, cartItems }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Render your cart items here */}
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            {/* Add more details if needed */}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        {/* Add more buttons or actions as needed */}
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCart;
