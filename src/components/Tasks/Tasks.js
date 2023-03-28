import { Component } from "react";
import { Task } from "../Task/Task";

export class Tasks extends Component {
  render() {
    return (
      <Task title="Пойти на работу" description="Мне нужно сходить на работу и я должна сделать там много задач" />
    );
  }
}