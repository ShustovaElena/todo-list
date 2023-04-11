import { Component } from "react";
import { ButtonGroup, Button } from '@mui/material';
import PropTypes from 'prop-types';

export class Tabs extends Component {
  render() {
    const { showFiltredTasks } = this.props;
    const tabsName = ['all', 'active', 'done', 'archive'];

    return (
      <ButtonGroup variant="text" sx={{ display: 'flex', justifyContent: 'center' }}>
        {tabsName.map((tab, index) => {
          return <Button key={index} onClick={() => showFiltredTasks(tab)}>{tab}</Button>;
        })}
      </ButtonGroup>
    );
  }
}

Tabs.propTypes = {
  showFiltredTasks: PropTypes.func
}
