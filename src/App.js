import { Component } from "react";
import { Header, Tasks } from "./components";
import { ThemeContext, themes } from './context/ThemeContext';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state.theme}>
            <Header changeTheme={this.toggleTheme}/>
            <Tasks />
        </ThemeContext.Provider>
      </>
    );
  }
}
