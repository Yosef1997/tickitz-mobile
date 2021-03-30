import React, {Component} from 'react';
import Router from './src/router/';
import {NavigationContainer} from '@react-navigation/native';
import persistStore from './src/components/Redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';

export default class App extends Component {
  render() {
    const {store, persistor} = persistStore();
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
