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
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  let persistor = persistStore(store);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
