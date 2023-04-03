import { Component } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '', 
      debouncedUserInput: ''
    }
  }

  componentDidUpdate() {
    const { userInput } = this.state;

    if (userInput !== '') {
      const { showSearchTasks } = this.props;
      setTimeout(() => {
        showSearchTasks(userInput);
      }, 500);
    }
  }

  handleChangeSearch = (event) => {
    this.setState({ userInput: event.target.value });
  }

  handleBlurSearch = () => {
    this.setState({ userInput: '' });
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
        onBlur={this.handleBlurSearch}
        value={userInput}
      />
    );
  }
}

Search.contextType = ThemeContext;

Search.propTypes = {
  showSearchTasks: PropTypes.func
}
