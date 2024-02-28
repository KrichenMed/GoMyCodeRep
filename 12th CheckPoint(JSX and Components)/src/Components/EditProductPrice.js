import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct } from "../JS/Action";

const EditProductPrice = () => {
  const { id } = useParams();
  const [newPrice, setNewPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleEdit = () => {
    if (newPrice !== 0) {
      dispatch(editProduct({id:id, prix:newPrice}));
      navigate("/");
      console.log("Updated Product List:", newPrice);
    } else {
      alert("Enter New Price !! ");
    }
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
          <Form.Label style={{ color: "#fff" }}>Enter New Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="New Price"
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button
          variant="warning"
          onClick={() => {
            handleEdit()
          }}
        >
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default EditProductPrice;
