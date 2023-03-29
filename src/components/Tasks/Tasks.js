import { Component } from "react";
import { Task } from "../Task";
import { Container } from '@mui/material';

export class Tasks extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%' }}>
        {tasks.map((task, index) => {
          return <Task key={index} title={task.title} description={task.description} />
        })}
      </Container>
    );
  }
}