import { Component } from "react";
import { Header, Tasks, CreateTaskField, Tabs } from "./components";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  addTask = (userInput) => {
    if (userInput) {
      this.setState((state) => {
        return {tasks: [...state.tasks, userInput]};
      });
    }
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <Header />
        <CreateTaskField addTask={this.addTask}/>
        <Tabs />
        <Tasks tasks={tasks}/>
      </>
    );
  }
}
