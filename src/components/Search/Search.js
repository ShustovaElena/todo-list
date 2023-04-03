import { Component } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
  }

  handleChangeSearch = (event) => {
    const { showSearchTasks } = this.props;
    
    this.setState({ userInput: event.target.value });

    showSearchTasks(event.target.value);
  }

  render() {
    let theme = this.context;
    const { userInput } = this.state;

    return (
      <TextField
        label="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: theme.colorSearch }} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        color="warning"
        sx={{ position: 'absolute', top: '10px', right: '20px'}}
        onChange={this.handleChangeSearch}
        value={userInput}
      />
    );
  }
}

Search.contextType = ThemeContext;