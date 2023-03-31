import { Component } from "react";
import { TextField, Box, Button } from "@mui/material";
import { ThemeContext } from '../../context/ThemeContext';

export class CreateTaskField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      status: 'active',
      error: false
    };
  }

  handleTitleChange = (event) => {
    if (event.target.value.length < 3) {
      this.setState({ error: true });
    } else {
    this.setState({ error: false });
    }

    this.setState({ title: event.target.value });
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  clear = () => {
    this.setState({ title: '', description: '' });
  }

  handleSubmit = (event) => {
    const { title, description, status, error } = this.state;
    const { addTask } = this.props;
    const id = "id" + Math.random().toString(16).slice(2);

    if (!error) {
      addTask({id, title, description, status});
    }

    this.setState({ title: '', description: '' });

    event.preventDefault();
  }

  render() {
    const { title, description, error } = this.state; 
    let theme = this.context;

    return (
      <Box id="form" component="form" onSubmit={this.handleSubmit} sx={{ display: 'flex', paddingTop: 2, margin: '0 auto 20px auto', justifyContent: 'center' }}>
        <TextField 
          id="title" 
          label="title" 
          variant="outlined" 
          required
          error={error}
          value={title}
          helperText={error && 'Title must be more 2 letters'}
          onChange={this.handleTitleChange} 
          sx={{ margin: '5px', width: '30%' }} 
        />
        <TextField 
          id="description" 
          label="description" 
          variant="outlined" 
          value={description}
          onChange={this.handleDescriptionChange}  
          sx={{ margin: '5px', width: '30%' }} 
        />
        <Button type="submit" variant="contained" sx={{ margin: '5px', height: '55px', width: '15%', backgroundColor: theme.backgroundHeader, color: theme.color }}>Create task</Button>
      </Box>
    );
  }
}

CreateTaskField.contextType = ThemeContext;