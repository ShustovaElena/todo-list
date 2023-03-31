import { Component } from "react";
import { ButtonGroup, Button } from '@mui/material';

export class Tabs extends Component {
  render() {
    const { showFiltredTasks } = this.props;

    return (
      <ButtonGroup variant="text" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => showFiltredTasks('all')}>All</Button>
        <Button onClick={() => showFiltredTasks('active')}>Active</Button>
        <Button onClick={() => showFiltredTasks('done')}>Done</Button>
        <Button onClick={() => showFiltredTasks('archive')}>Archive</Button>
      </ButtonGroup>
    );
  }
}
