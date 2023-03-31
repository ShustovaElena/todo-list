import { Component } from "react";
import { Card, CardContent, Typography, CardActions, IconButton, Container, Checkbox, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DoneIcon from '@mui/icons-material/Done';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChangeTask: false,
      title: this.props.title,
      description: this.props.description,
      status: this.props.status,
      isDone: this.props.status === 'active' ? false : true,
      isArchive: false,
      isError: false,
      borderStyle: this.props.status === 'done' ? '2px solid var(--main-color)' : 'none'
    }
  }

  handleChangeTitle = (event) => {
    if (event.target.value.length < 3) {
      this.setState((state) => {
        return { isError: true };
      });
    } else {
      this.setState((state) => {
        return { isError: false };
      });
    }
    this.setState({title: event.target.value});
  }

  handleChangeDescription = (event) => {
    this.setState({description: event.target.value});
  }

  handleEditTask = () => {
    const { id, editTask, status } = this.props;
    const { title, description, isError } = this.state;

    if (!isError) {
      if (!this.state.isChangeTask) {
        this.setState((state) => {
          return {isChangeTask: true};
        });
      } else {
        this.setState((state) => {
          return {isChangeTask: false};
        });
      }
  
      editTask({id, title, description, status});
    }
  }

  handleChangeStatus = () => {
    const { isDone } = this.state;

    this.setState((state) => {
    return { 
      status: state.status === 'active' ? 'done' : 'active', 
      isDone: !state.isDone,
      borderStyle: isDone ? '2px solid var(--main-color)' : 'none'
    }});
  }

  componentDidUpdate(prevState) {
    const { id, editTask } = this.props;
    const { title, description, isDone, status } = this.state;
    if (prevState.status !== status) {
      this.setState({borderStyle: isDone ? '2px solid var(--main-color)' : 'none'});
      editTask({id, title, description, status});
    }
  }

  handleDeleteTask = () => {
    const { deleteTask, id } = this.props;
    deleteTask(id);
  }

  handleArchiveTask = () => {
    const { status } = this.state;

    if (status !== 'done') {
      this.setState((state) => {
        return { 
          status: state.status === 'active' ? 'archive' : 'active',
          isArchive: !state.isArchive
        }
      });
    }
  }

  render() {
    const { isChangeTask, title, description, isError, isDone, isArchive, borderStyle } = this.state;

    return (
      <Card style={{ border: borderStyle }} sx={{ maxWidth: 500, margin: '20px', minHeight: 100}}>
      <CardContent sx={{ padding: '10px', display: 'flex' }}>
        <Checkbox onChange={this.handleChangeStatus} checked={isDone} />
        <Container>
          {isChangeTask ? 
          <TextField 
            label="title" 
            variant="standard" 
            sx={{ display: 'block' }} 
            value={title} 
            onChange={this.handleChangeTitle} 
            required 
            error={isError} 
            helperText={isError && 'Title must be more 2 letters'}
          /> : 
          <Typography variant="h5" component="div">
            {title}
          </Typography>}
          {isChangeTask ? 
          <TextField label="description" variant="standard" value={description} onChange={this.handleChangeDescription} /> : 
          <Typography color="text.secondary">
            {description}
          </Typography>}
        </Container>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <IconButton color="primary" aria-label="edit" onClick={this.handleEditTask}>
          {isChangeTask ? <DoneIcon /> : <EditIcon />}
        </IconButton>
        <IconButton aria-label="delete" onClick={this.handleDeleteTask}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="archive" onClick={this.handleArchiveTask}>
          {isArchive ? <BookmarkIcon color="primary"/> : <BookmarkBorderIcon color={isDone ? "disabled" : "primary"}/>}
        </IconButton>
      </CardActions>
    </Card>
    );
  }
}