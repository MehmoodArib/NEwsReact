
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Router } from './Navigation';
import reducers from './reducers';
import NavigationService from './NavigationService';


const store = createStore(reducers, applyMiddleware(thunk));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router
          ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
        />
      </Provider>
    );
  }
}

export default App;
