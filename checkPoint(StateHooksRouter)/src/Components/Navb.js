import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";


function BrandExample() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark" style={{ marginBottom: "10px" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.unicorn.dev/wp-content/uploads/2023/01/react.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Use State In React
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
