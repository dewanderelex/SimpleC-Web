import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import SubNavigation from './Components/SubNavigation/SubNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <SubNavigation />
      </div>
    );
  }
}

export default App;
