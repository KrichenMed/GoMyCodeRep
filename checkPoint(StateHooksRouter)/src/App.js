import React from "react";
import "./App.css";
import Tasks from "./Components/Tasks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormPage from "./Components/FormPage";
import Index from "./Components/Index";
import TasksList from "./Components/TaskList";
import Hooks from "./Components/Hooks";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import DataMovies from "./Components/DataMovies";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Error from "./Components/Error";

function App() {
  var access= false;

  return (
    <Router>
      <div className="App">
        <Navbar
          bg="danger"
          data-bs-theme="dark"
          style={{ marginBottom: "10px" }}
        >
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
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Index" style={{ fontWeight: "bold" }}>
                  Index
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/FormPage"
                  style={{ fontWeight: "bold" }}
                >
                  Form Page
                </Nav.Link>
                <Nav.Link as={Link} to="/Tasks" style={{ fontWeight: "bold" }}>
                  Tasks Page
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/TasksList"
                  style={{ fontWeight: "bold" }}
                >
                  TasksList Page
                </Nav.Link>
                <Nav.Link as={Link} to="/Hooks" style={{ fontWeight: "bold" }}>
                  Hooks
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/DataMovies"
                  style={{ fontWeight: "bold" }}
                >
                  Movies
                </Nav.Link>
                <Nav.Link as={Link} to="/Error" style={{ fontWeight: "bold" }}>
                  Error Page
                </Nav.Link>
                <Form inline>
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                      />
                    </Col>
                    <Col xs="auto">
                      <Button type="submit">Submit</Button>
                    </Col>
                  </Row>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/Error" element={<Error />} />
          <Route path="/DataMovies" element={<DataMovies />} />
          <Route path="/Hooks" element={<Hooks />} />
          <Route path="/TasksList" element={<TasksList />} />
          <Route path="/Tasks" element={<Tasks />} />
          <Route path="/FormPage" element={<FormPage />} />
          <Route path="/Index" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
