import { Component } from "react";
import { Switch, Box }  from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export class Switcher extends Component {
  render() {
    const { changeTheme } = this.props;

    return (
      <Box>
        <DarkModeIcon sx={{color: 'white', position: 'absolute', top: 22}} />
        <Switch defaultChecked onClick={changeTheme} color="warning" sx={{ position: 'absolute', top: 15, left: 42}} />
        <LightModeIcon sx={{color: 'white', position: 'absolute', top: 22, left: 100}}/>
      </Box>
    );
  }
}