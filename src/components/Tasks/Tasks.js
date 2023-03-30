import { Component } from "react";
import { Task, CreateTaskField, Tabs } from "../../components";
import { Container } from '@mui/material';

export class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    this.setState({ tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [] })
  }

  componentDidUpdate() {
    this.setTasksFromLocalStorage();
  }

  setTasksFromLocalStorage = () => {
    const { tasks } = this.state;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addTask = (userInput) => {
    if (userInput) {
      this.setState((state) => {
        return {tasks: [...state.tasks, userInput]};
      });
    }
  };

  editTask = (userInput) => {
    console.log(userInput);
    if (userInput) {
      this.setState((state) => {
        return {tasks: state.tasks.map(task => task.id !== userInput.id ? task : userInput)};
      });
    }
  };

  render() {
    const { tasks } = this.state;
    return (
      <>
        <CreateTaskField addTask={this.addTask}/>
        <Tabs />
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%' }}>
          {tasks && tasks.map((task) => {
            return <Task key={task.id} {...task} editTask={this.editTask} />
          })}
        </Container>
      </>
    );
  }
}