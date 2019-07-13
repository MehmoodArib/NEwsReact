
import React, { Component } from 'react';
import { Router } from './Navigation';
import NavigationService from './NavigationService';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router
        ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
      />
    );
  }
}

export default App;
