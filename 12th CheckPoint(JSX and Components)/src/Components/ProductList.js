import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
  const ProductLists = useSelector((state) => state.ProductReducer.ProductList);
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#e8e9ea",
          margin: "10px 6% 10px 6%",
          borderRadius: "0.5em",
        }}
      >
        <Link to={"/AddProduct"}>
          <Button>Add New Phone</Button>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          backgroundColor: "#e8e9ea",
          margin: "10px 6% 10px 6%",
          borderRadius: "0.5em",
        }}
      >
        {ProductLists.map((e) => (
          <ProductCard el={e} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
