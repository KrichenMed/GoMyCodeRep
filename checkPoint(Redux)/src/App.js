import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./Components/Navb";
import ProductList from "./Components/ProductList";
import { Route, Routes } from "react-router-dom";
import EditProductPrice from "./Components/EditProductPrice";
import AddProduct from "./Components/AddProduct";

function App() {
  return (
    <div className="App">
      <BasicExample />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/EditProductPrice/:id" element={<EditProductPrice />} />
      </Routes>
    </div>
  );
}

export default App;
