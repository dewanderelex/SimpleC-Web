import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import SubNavigation from './Components/SubNavigation/SubNavigation';
import TodoList from './Components/TodoList/TodoList';

import { withStyles } from '@material-ui/core/styles';

const WIDTH = window.innerWidth;

const styles = theme => ({
  app: {

  },
  screen: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 70
  },
  todoList: {
    width: WIDTH / 3,
  },
  subNavigation: {
    width: '100%'
  }
});

class App extends Component {

  componentDidMount () {

  }

  render() {

    const { classes } = this.props;

    return (
      <div className = {classes.app}>
        <Navigation />
        <div className = {classes.screen}>
          <div className = {classes.todoList}>
            <TodoList userToken = "Bearer 1234abcd"/>
          </div>
          <div className = {classes.subNavigation}>
            <SubNavigation />
          </div>      
        </div>        
      </div>
    );
  }
}

export default withStyles(styles)(App);
