import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Redux</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
