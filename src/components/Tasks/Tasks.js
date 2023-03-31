import { Component } from "react";
import { Task, CreateTaskField, Tabs } from "../../components";
import { Container } from '@mui/material';

export class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [], 
      filteredTasks: []
    }
  }

  componentDidMount() {
    this.setState({ 
      tasks: this.getTasksFromLocalStorage(),
      filteredTasks: this.getTasksFromLocalStorage()
    })
  }

  componentDidUpdate() {
    this.setTasksFromLocalStorage();
  }

  setTasksFromLocalStorage = () => {
    const { tasks } = this.state;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasksFromLocalStorage = () => {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  }

  updateFilteredTasks = () => {
    this.setState((state) => {return {filteredTasks: state.tasks};});
  }

  addTask = (userInput) => {
    if (userInput) {
      this.setState((state) => {
        return {tasks: [...state.tasks, userInput]};
      });
      this.updateFilteredTasks();
    }
  };

  editTask = (userInput) => {
    if (userInput) {
      this.setState((state) => {
        return {tasks: state.tasks.map(task => task.id !== userInput.id ? task : userInput)};
      });
      this.updateFilteredTasks();
    }
  };

  deleteTask = (id) => {
    this.setState((state) => {
      return {tasks: state.tasks.filter(task => task.id !== id)};
    });
    this.updateFilteredTasks();
  };

  showFiltredTasks = (filterName) => {
    const { tasks } = this.state;
    if (filterName === 'all') {
      this.setState({filteredTasks: tasks});
    } else {
    this.setState({filteredTasks: tasks.filter(task => task.status === filterName)});
    }
  }

  render() {
    const { filteredTasks } = this.state;
    return (
      <>
        <CreateTaskField addTask={this.addTask}/>
        <Tabs showFiltredTasks={this.showFiltredTasks} />
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%' }}>
          {filteredTasks && filteredTasks.map((task) => {
            return <Task key={task.id} {...task} editTask={this.editTask} deleteTask={this.deleteTask} />
          })}
        </Container>
      </>
    );
  }
}