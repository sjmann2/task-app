// App will contain all the logic and manage state
import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(){
    super();
// define state, assign task to an object and tasks.text to an empty string. tasks is an empty array.
    this.state = {
      task: {text: '',
      id: uniqid()
    },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };
// preventDefault because we don't want the default behavior of refreshing the form anytime we submit it
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      // adds the task (whats in the input field) to the tasks array
      tasks: this.state.tasks.concat(this.state.task),
      task: {
      text: '',
      id: uniqid()
    },
    });
  };

  render() {
    // deconstruct state
    const {task, tasks} = this.state;
    // rendering a form element
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
            onChange={this.handleChange}
            // we want the value of the input field to be what we saved in our task object in state under the text property
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}
export default App;
