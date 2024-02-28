import React from "react";
import { Button } from "react-bootstrap";
class States extends React.Component {
    state ={age :25}
    render(){
        console.log(this.state.age, "Y.O")
        if (this.state.age === 35) {
          alert("Congratulations! You have reached the age of 35!");
        }
        return (
          <div>
            <h1 style={{ color: "yellowgreen" }}>Hello there!!</h1>
            <h2 style={{ color: this.state.age > 30 ? "green" : "red" }}>
              If the age is under 30 this writing will be in Red esle it will be
              Green
            </h2>
            <p style={{ color: "white" }}>
              This button here to increase the age !!!
            </p>
            <Button variant="success"
              onClick={() => {
                this.setState({ age: this.state.age + 1 });
              }}
            >
              Increase Age !!
            </Button>
            <Button variant="danger"
              onClick={() => {
                this.setState({ age: this.state.age - 1 });
              }}
            >
              decrease Age !!
            </Button>
          </div>
        );
    }
}
export default States