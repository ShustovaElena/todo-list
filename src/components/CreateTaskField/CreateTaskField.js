import { Component } from "react";
import { TextField, Box, Button } from "@mui/material";

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

    return (
      <Box id="form" component="form" onSubmit={this.handleSubmit} sx={{ display: 'flex', margin: '20px auto', justifyContent: 'center' }}>
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
        <Button type="submit" variant="contained" sx={{ margin: '5px', height: '55px', width: '15%' }}>Create task</Button>
      </Box>
    );
  }
}