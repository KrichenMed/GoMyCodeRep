import React, { Component } from "react";

class TasksList extends Component {
  state = {
    Tasks: [
      { name: "Task 1", isDone: true, id: 1, showEdit: false },
      { name: "Task 2", isDone: false, id: 2, showEdit: false },
      { name: "Task 3", isDone: true, id: 3, showEdit: false },
    ],
    show: false,
    taskName: "",
    editName: "",
  };

  addTask = () => {
    this.setState({
      Tasks: [
        ...this.state.Tasks,
        {
          name: this.state.taskName,
          isDone: false,
          id: Math.random(),
          showEdit: false,
        },
      ],
      show: false,
      taskName: "",
    });
  };

  done = (id) => {
    this.setState({
      Tasks: this.state.Tasks.map((element) =>
        element.id === id ? { ...element, isDone: !element.isDone } : element
      ),
    });
  };

  deleteTask = (id) => {
    this.setState({
      Tasks: this.state.Tasks.filter((element) => element.id !== id),
    });
  };

  editTask = (id) => {
    this.setState({
      Tasks: this.state.Tasks.map((element) =>
        element.id === id
          ? { ...element, name: this.state.editName, showEdit: false }
          : element
      ),
    });
  };

  render() {
    return (
      <div style={{backgroundColor:"white"}}>
        <button onClick={() => this.setState({ show: true })}>Add Task</button>
        {this.state.show ? (
          <div>
            <input
              onChange={(e) => this.setState({ taskName: e.target.value })}
            ></input>
            {this.state.taskName ? (
              <button onClick={this.addTask}>Add New Task</button>
            ) : null}
          </div>
        ) : null}

        {this.state.Tasks.map((el) => (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {el.showEdit ? (
              <input
                defaultValue={el.name}
                onChange={(e) => this.setState({ editName: e.target.value })}
              ></input>
            ) : (
              <p>{el.name}</p>
            )}
            {el.showEdit ? (
              <button onClick={() => this.editTask(el.id)}>Confirm Edit</button>
            ) : (
              <button onClick={() => this.editTask(el.id)}>Edit Task</button>
            )}
            <button
              style={
                el.isDone
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "red" }
              }
              onClick={() => this.done(el.id)}
            >
              {el.isDone ? "Undone" : "Done"}
            </button>
            <button onClick={() => this.deleteTask(el.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default TasksList;
