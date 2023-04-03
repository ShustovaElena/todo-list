import { Component } from "react";
import { Card, CardContent, Typography, CardActions, IconButton, Container, Checkbox, TextField, Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DoneIcon from '@mui/icons-material/Done';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ThemeContext } from '../../context/ThemeContext';
import PropTypes from 'prop-types';

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChangeTask: false,
      title: this.props.title,
      description: this.props.description,
      deadline: this.props.deadline,
      status: this.props.status,
      isDone: this.props.status === 'done' ? true : false,
      isArchive: this.props.status === 'archive' ? true : false,
      isError: false,
      isDeadline: false,
      borderStyle: this.props.status === 'done' ? '2px solid var(--main-color)' : 'none'
    }
  }

  componentDidMount() {
    const { deadline } = this.state;

    if (parseInt((new Date(deadline) - new Date())/1000/60/60) < 24) {
      this.setState({ isDeadline: true });
    }
  }

  componentDidUpdate(prevState) {
    const { id, editTask } = this.props;
    const { title, description, deadline, isDone, status } = this.state;
    if (prevState.status !== status) {
      this.setState({borderStyle: isDone ? '2px solid var(--main-color)' : 'none'});
      editTask({id, title, description, deadline, status});
    }
  }

  handleChangeTitle = (event) => {
    if (event.target.value.length < 3) {
      this.setState({ isError: true });
    } else {
      this.setState({ isError: false });
    }
    this.setState({title: event.target.value});
  }

  handleChangeDescription = (event) => {
    this.setState({description: event.target.value});
  }

  handleChangeDeadline = (event) => {
    this.setState({deadline: event.target.value});
  }

  handleEditTask = () => {
    const { id, editTask, status } = this.props;
    const { title, description, deadline, isError } = this.state;

    if (!isError) {
      if (!this.state.isChangeTask) {
        this.setState({isChangeTask: true});
      } else {
        this.setState({isChangeTask: false});
      }

      if (parseInt((new Date(deadline) - new Date())/1000/60/60) < 24) {
        this.setState({ isDeadline: true });
      } else {
        this.setState({ isDeadline: false });
      }

      editTask({id, title, description, deadline, status});
    }
  }

  handleChangeStatus = () => {
    const { isDone, status } = this.state;

    if (status !== 'archive') {
      this.setState((state) => {
      return { 
        status: state.status === 'active' ? 'done' : 'active', 
        isDone: state.isDone === true ? false : true,
        borderStyle: isDone ? '2px solid var(--main-color)' : 'none'
      }});
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
          isArchive: state.isArchive === false ? true : false,
        }
      });
    }
  }

  render() {
    const { isChangeTask, title, description, deadline, isError, isDone, isArchive, borderStyle, isDeadline } = this.state;
    let theme = this.context;

    return (
      <Card style={{ border: borderStyle }} sx={{ maxWidth: 500, margin: '20px', minHeight: 100, backgroundColor: theme.backgroundTask, color: theme.colorTask}}>
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
        {isDeadline && <LocalFireDepartmentIcon color="warning" />}
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '5px', marginLeft: '10px'}}>
          <CalendarMonthIcon color="primary" />
          {isChangeTask ? 
            <TextField type="date" variant="standard" value={deadline} onChange={this.handleChangeDeadline} /> : 
            <Typography sx={{ color: theme.colorDeadline }}>
              Deadline: {deadline}
            </Typography>}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <IconButton color="primary" aria-label="edit" onClick={this.handleEditTask}>
              {isChangeTask ? <DoneIcon /> : <EditIcon />}
            </IconButton>
            <IconButton color="primary" aria-label="delete" onClick={this.handleDeleteTask}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="archive" onClick={this.handleArchiveTask}>
              {isArchive ? <BookmarkIcon color="primary"/> : <BookmarkBorderIcon color={isDone ? "disabled" : "primary"}/>}
            </IconButton>
        </Box>
      </CardActions>
    </Card>
    );
  }
}

Task.contextType = ThemeContext;

Task.propTypes = {
  optionalObjectWithShape: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    deadline: PropTypes.string,
    status: PropTypes.string,
  }),
  editTask: PropTypes.func,
  deleteTask: PropTypes.func,
}

Task.defaultProps = {
  deadline: ''
};
