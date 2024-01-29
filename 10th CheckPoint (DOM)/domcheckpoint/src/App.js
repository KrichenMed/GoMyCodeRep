import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./Components/Navb";
function App() {
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
