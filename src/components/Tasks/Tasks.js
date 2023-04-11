import { Component } from "react";
import { Task, CreateTaskField, Tabs, Search } from "../../components";
import { Container, Box } from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext';

import './styles.css';

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

  showSearchTasks = (userInput) => {
    const { tasks } = this.state;

    this.setState({filteredTasks: tasks.filter(task => task.title.toLowerCase().includes(userInput))});
  }

  render() {
    const { filteredTasks } = this.state;
    let theme = this.context;

    return (
      <Box sx={{ backgroundColor: theme.background, backgroundSize: '100%', minHeight: '100vh'}}>
        <Search showSearchTasks={this.showSearchTasks}/>
        <CreateTaskField addTask={this.addTask}/>
        <Tabs showFiltredTasks={this.showFiltredTasks} />
        <Container className="tasks-container" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '40%' }}>
          {filteredTasks && filteredTasks.map((task) => {
            return <Task key={task.id} {...task} editTask={this.editTask} deleteTask={this.deleteTask} />
          })}
        </Container>
      </Box>
    );
  }
}

Tasks.contextType = ThemeContext;
