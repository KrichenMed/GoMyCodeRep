import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { deleteProduct } from "../JS/Action";
import { useDispatch } from "react-redux";

function ProductCard({ el }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={el.imgURL} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.prix}</Card.Text>
        <Button variant="danger" onClick={() => handleDelete(el.id)}>
          Delete
        </Button>
        <Link to={`/EditProductPrice/${el.id}`}>
          <Button style={{ marginLeft: "15px" }}>Edit Price</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
