import { Typography, Container } from "@mui/material";
import { Component } from "react";
import { Switcher } from '../index';
import { ThemeContext } from '../../context/ThemeContext';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    let theme = this.context;
    const { changeTheme } = this.props;

    return (
    <Container maxWidth="100%" sx={{ backgroundColor: theme.backgroundHeader }}>
        <Switcher changeTheme={changeTheme}/>
        <Typography variant="h2" component="h2" align="center" 
          sx={{color: theme.color, textTransform: 'uppercase', width: '50%', margin: '0 auto', fontSize: '3.5rem'}}>
          Todo List
        </Typography>
      </Container> 
    );
  }
}

Header.contextType = ThemeContext;

Header.propTypes = {
  changeTheme: PropTypes.func
}
