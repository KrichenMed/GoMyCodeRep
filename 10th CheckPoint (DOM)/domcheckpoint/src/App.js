import React, { useState } from "react";
import Navb from "./Components/Navb";
import Products from "./Components/Products";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (title) => {
    const itemInCart = cartItems.find((item) => item.title === title);

    if (itemInCart) {
      const updatedCart = cartItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { title, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <Navb cartItems={cartItems} />
      <div
        style={{
          backgroundColor: "rgb(234, 234, 234)",
          marginLeft: "6%",
          marginRight: "6%",
          marginBottom: "10px",
          borderRadius: "10px",
        }}
      >
        <container>
          <h1 style={{ fontWeight: "bold", color: "red" }}>Bon Plans</h1>
        </container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <Products onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
