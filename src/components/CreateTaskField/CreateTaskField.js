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
    this.setState({ title: event.target.value });
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  clear = () => {
    this.setState({ title: '', description: '' });
  }

  handleSubmit = (event) => {
    const { title, description, status } = this.state;
    const { addTask } = this.props;

    if (this.state.title.length < 3) {
      this.setState({ error: true });
    } else {
    this.setState({ error: false });
    }

    addTask({title, description, status});
    document.getElementById("form").reset();
    event.preventDefault();
  }

  render() {
    const { error } = this.state; 

    return (
      <Box id="form" component="form" sx={{ display: 'flex', margin: '20px auto', justifyContent: 'center' }}>
        <TextField 
          id="title" 
          label="title" 
          variant="outlined" 
          required
          error={error}
          helperText={error && 'Title must be more 2 letters'}
          onChange={this.handleTitleChange} 
          sx={{ margin: '5px', width: '30%' }} 
        />
        <TextField 
          id="description" 
          label="description" 
          variant="outlined" 
          onChange={this.handleDescriptionChange}  
          sx={{ margin: '5px', width: '30%' }} 
        />
        <Button variant="contained"  onClick={this.handleSubmit} sx={{ margin: '5px', height: '55px', width: '15%' }}>Create task</Button>
      </Box>
    );
  }
}