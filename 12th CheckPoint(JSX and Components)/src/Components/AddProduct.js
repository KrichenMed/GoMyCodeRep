import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../JS/Action";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imgURL, setImgURL] = useState("");

  const handleSubmit = () => {
    dispatch(
      addProduct({ id: Math.random(), name: name, prix: price, imgURL: imgURL })
    );
    navigate("/");
  };
  return (
    <div
      style={{
        margin: "10px 6% 10px 6%",
        borderRadius: "0.5em",
      }}
    >
      <Form
        data-bs-theme="dark"
        style={{
          backgroundColor: "#212529",
          borderRadius: "0.5em",
          padding: "5px",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: "#fff" }}>Phone Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone Model"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "#fff" }}>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "#fff" }}>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image URL"
            onChange={(e) => setImgURL(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" onClick={handleSubmit} >Add</Button>
      </Form>
    </div>
  );
}

export default AddProduct;
