import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button"; // Import Button component
import ShoppingCart from "./ShoppingCart"; // Import the new component

const Navb = ({ cartItems }) => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCartClose = () => {
    setShowCart(false);
  };

  const cartItemCount = cartItems.reduce(
    (totalCount, item) => totalCount + item.quantity,
    0
  );

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        data-bs-theme="dark"
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand href="#home">Shopping-Cart-Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {/* Replace Nav.Link with Button */}
              <Button
                variant="link"
                onClick={handleCartClick}
                id="cart"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{ marginRight: "8px" }}
                />
                Panier {cartItemCount > 0 && `(${cartItemCount})`}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Render the ShoppingCart component conditionally based on showCart state */}
      <ShoppingCart
        show={showCart}
        onHide={handleCartClose}
        cartItems={cartItems}
      />
    </>
  );
};

export default Navb;
