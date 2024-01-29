// Product.js
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as filledHeart,
  faPlus,
  faMinus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { Button as Butt } from "react-bootstrap";
import { Input } from "@mui/material";

const generateUniqueClassName = (baseClassName) => {
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${baseClassName}-${randomNumber}`;
};

const Product = ({
  title,
  imageUrl,
  description,
  content,
  linkText,
  linkUrl,
  buttonText,
  onButtonClick,
}) => {
  const likeButtonClassName = generateUniqueClassName("like-btn");
  const unlikedIconClassName = generateUniqueClassName("unliked");
  const likedIconClassName = generateUniqueClassName("liked");

  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(0, quantity + amount);
    setQuantity(newQuantity);
  };

  const handleLikeClick = () => {
    const likeButton = document.querySelector(`.${likeButtonClassName}`);
    const unlikedIcons = document.querySelectorAll(`.${unlikedIconClassName}`);
    const likedIcons = document.querySelectorAll(`.${likedIconClassName}`);

    if (likeButton && unlikedIcons.length > 0 && likedIcons.length > 0) {
      // Toggle the visibility of the heart icons for the specific card
      unlikedIcons.forEach((icon) => {
        icon.style.display = icon.style.display === "none" ? "inline" : "none";
      });

      likedIcons.forEach((icon) => {
        icon.style.display = icon.style.display === "none" ? "inline" : "none";
      });
    }
  };

  const handleAddToCart = () => {
    // Check if quantity is greater than 0 before adding to the cart
    if (quantity > 0) {
      onButtonClick({
        title: title,
        quantity: quantity,
      });
      // Reset quantity to 0 after adding to the cart
      setQuantity(0);
    }
  };

  return (
    <Card
      className="custom-card"
      style={{ width: "19%", margin: "8px", display: "inline-block" }}
    >
      <div className="image-container">
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ width: "100%", height: "286px", objectFit: "contain" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{content}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={linkUrl}>{linkText}</Card.Link>
        <ListGroup className="list-group-flush">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Butt
              variant="contained"
              style={{
                backgroundColor: "#90CAF9",
                color: "#081520",
                marginRight: "8px",
                width: "",
                borderRadius: "5px",
              }}
              onClick={() => handleQuantityChange(1)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Butt>
            <Input
              type="text"
              name="qte"
              value={quantity}
              style={{ marginRight: "2px" }}
              readOnly
            />
            <Butt
              variant="contained"
              style={{
                backgroundColor: "#90CAF9",
                color: "#081520",
                marginRight: "8px",
              }}
              onClick={() => handleQuantityChange(-1)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </Butt>
            <Button
              id="addToCart"
              variant="contained"
              style={{
                backgroundColor: "#90CAF9",
                color: "#081520",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "bold",
                marginRight: "8px",
              }}
              onClick={handleAddToCart}
            >
              {buttonText}
              <FontAwesomeIcon
                className="shopping-cart-icon"
                icon={faShoppingCart}
                style={{ marginLeft: "8px" }}
              />
            </Button>
            <Button
              className={likeButtonClassName}
              variant="contained"
              style={{
                backgroundColor: "#90CAF9",
                color: "#081520",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "bold",
                height: "36px",
              }}
              onClick={handleLikeClick}
            >
              <FontAwesomeIcon
                className={unlikedIconClassName}
                icon={farHeart}
                style={{ marginRight: "8px" }}
              />
              <FontAwesomeIcon
                className={likedIconClassName}
                icon={filledHeart}
                style={{ marginRight: "8px", display: "none" }}
              />
            </Button>
          </div>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Product;
