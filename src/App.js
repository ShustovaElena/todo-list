import { Component } from "react";
import { Header, Tasks } from "./components";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Tasks />
      </>
    );
  }
}
