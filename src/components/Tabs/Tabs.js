import { Component } from "react";
import { ButtonGroup, Button } from '@mui/material';

export class Tabs extends Component {
  render() {
    return (
      <ButtonGroup variant="text" aria-label="text button group" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Done</Button>
        <Button>Archive</Button>
      </ButtonGroup>
    );
  }
}