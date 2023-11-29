/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/Navigator';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
