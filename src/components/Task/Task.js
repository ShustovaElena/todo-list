import { Component } from "react";
import { Card, CardContent, Typography, CardActions, IconButton, Container } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export class Task extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { title, description } = this.props;

    return (
      <Card sx={{ maxWidth: 475, margin: '20px', minHeight: 100 }}>
      <CardContent sx={{ padding: '10px', display: 'flex' }}>
        <IconButton aria-label="active">
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <Container>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography color="text.secondary">
            {description}
          </Typography>
        </Container>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <IconButton color="primary" aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="archive">
          <BookmarkBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
    );
  }
}