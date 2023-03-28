import { Component } from "react";
import { TextField, Container, Button } from "@mui/material";

export class CreateTaskField extends Component {
  render() {
    return (
      <Container sx={{ display: 'flex', margin: '20px auto', justifyContent: 'center' }}>
        <TextField id="title" label="title" variant="outlined" sx={{ margin: '5px', width: '30%' }} />
        <TextField id="description" label="description" variant="outlined"  sx={{ margin: '5px', width: '30%' }} />
        <Button variant="contained" sx={{ margin: '5px', height: '55px', width: '15%' }}>Create task</Button>
      </Container>
    );
  }
}