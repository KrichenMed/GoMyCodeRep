import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Button, Form } from "react-bootstrap";

class Tasks extends Component {
  state = {
    Tasks: [
      { name: "Task 1", isDone: true },
      { name: "Task 2", isDone: false },
      { name: "Task 3", isDone: true },
    ],
    show: false,
    taskName: "",
    editIndex: null,
  };

  addClick = () => {
    if (this.state.editIndex !== null) {
      // If editIndex is not null, update the existing task
      const updatedTasks = [...this.state.Tasks];
      updatedTasks[this.state.editIndex] = {
        name: this.state.taskName,
        isDone: true,
      };
      this.setState({ Tasks: updatedTasks, editIndex: null });
    } else {
      // Add a new task
      this.setState({
        Tasks: [
          ...this.state.Tasks,
          { name: this.state.taskName, isDone: true },
        ],
      });
    }

    this.setState({ show: false, taskName: "" });
  };

  deleteClick = (e) => {
    const updatedTasks = [...this.state.Tasks];
    updatedTasks.splice(e, 1);
    this.setState({ Tasks: updatedTasks });
  };

  editClick = (e) => {
    const taskToEdit = this.state.Tasks[e];
    this.setState({ show: true, taskName: taskToEdit.name, editIndex: e });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "grey",
          marginLeft: "6%",
          marginRight: "6%",
          marginTop: "10px",
          marginBottom: "10px",
          borderRadius: "1em",
        }}
      >
        <Button
          variant="primary"
          onClick={() =>
            this.setState({ show: true, taskName: "", editIndex: null })
          }
          style={{
            marginBottom: "10px",
            marginTop: "10px",
            marginLeft: "10px",
            alignSelf: "flex-start",
          }}
        >
          Add new task
        </Button>
        {this.state.show ? (
          <div style={{ marginLeft: "10px" }}>
            <Form.Control
              type="text"
              placeholder="Enter task name"
              style={{ marginBottom: "10px" }}
              value={this.state.taskName}
              onChange={(e) => {
                this.setState({ taskName: e.target.value });
              }}
            />
            <Button variant="success" onClick={this.addClick}>
              {this.state.editIndex !== null ? "Update" : "Add"}
            </Button>
          </div>
        ) : (
          ""
        )}

        <br></br>
        <Table
          responsive="sm"
          variant="dark"
          style={{
            marginTop: "10px",
            marginLeft: "10px",
            borderRadius: "10px",
            alignSelf: "flex-start",
          }}
        >
          <thead>
            <tr>
              <th style={{ borderTopLeftRadius: "10px" }}>ID</th>
              <th>List of tasks</th>
              <th colSpan={3} style={{ borderTopRightRadius: "10px" }}>
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.Tasks.map((task, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{task.name}</td>
                <td>
                  <Button
                    variant={task.isDone ? "success" : "primary"}
                    onClick={() =>
                      this.setState((prevState) => {
                        const updatedTasks = [...prevState.Tasks];
                        updatedTasks[index] = {
                          ...task,
                          isDone: !task.isDone,
                        };
                        return { Tasks: updatedTasks };
                      })
                    }
                  >
                    {task.isDone ? "Done" : "UnDone"}
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => this.deleteClick(index)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => this.editClick(index)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Tasks;
