import { Component } from "react";
import { Task } from "../Task";
import { Container } from '@mui/material';

export class Tasks extends Component {
  render() {
    return (
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%' }}>
        <Task title="Пойти на работу" description="Мне нужно сходить на работу и я должна сделать там много задач" />
        <Task title="Пойти на работу" />
      </Container>
    );
  }
}