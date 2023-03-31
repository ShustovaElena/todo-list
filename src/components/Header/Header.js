import { Typography, Container } from "@mui/material";
import { Component } from "react";
import { Switcher } from '../Switcher';
import { ThemeContext } from '../../context/ThemeContext';

export class Header extends Component {
  render() {
  let theme = this.context;
  const { changeTheme } = this.props;
  return (
   <Container maxWidth="100%" sx={{backgroundColor: theme.backgroundHeader}}>
      <Typography variant="h2" component="h2" align="center" 
      sx={{color: theme.color, textTransform: 'uppercase'}}>
        Todo List
      </Typography>
      <Switcher changeTheme={changeTheme}/>
    </Container> 
  );
  }
}

Header.contextType = ThemeContext;